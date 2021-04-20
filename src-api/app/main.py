import os
from datetime import timedelta, datetime

import sentry_sdk
from fastapi import FastAPI, HTTPException, status, Depends
from fastapi.security import OAuth2PasswordRequestForm
from pydantic import ValidationError
from cloudant import CouchDB
from cloudant.error import CloudantDatabaseException

from studium.core.models import User, Token, NewUser, UserInDB
from studium.core.security import authenticate_user, get_current_active_user, is_valid_email, get_password_hash
from studium.core.jwt import create_access_token, ACCESS_TOKEN_EXPIRE_MINUTES

sentry_dsn = os.getenv("SENTRY_DSN")
sentry_sdk.init(sentry_dsn, traces_sample_rate=1.0)

# conn = DataController()
# conn.get_database('_all_dbs')
# conn.create_partition_db('ok')
client = CouchDB(**{
    'user': os.getenv("COUCHDB_USER"),
    'auth_token': os.getenv("COUCHDB_PASSWORD"),
    'url': os.getenv("COUCHDB_URL"),
    'connect': True})


client.connect()

try:
    users_db = client['users']
except Exception as e:
    print(e)
    users_db = 'users'
    print(f"[CouchDB] Creating database: {users_db}")
    users_db = client.create_database(users_db, partitioned=False)


app = FastAPI()


@app.post("/account/create")
async def create_account(form_data: NewUser):
    unknown_email = is_valid_email(form_data.email)
    if not unknown_email['is_valid']:
        return {'error': unknown_email['value']}

    email = unknown_email['value']

    if form_data.password_one != form_data.password_two:
        return {'error': 'Passwords do not match.'}

    password = form_data.password_one

    if len(password) < 8:
        return {'error': 'The minimum password length is 8 characters.'}

    hashed_password = get_password_hash(password)

    account_creation_time = str(datetime.now())

    new_user = {
        '_id': email,
        'username': form_data.username,
        'hashed_password': hashed_password,
        'ctime': account_creation_time,
    }
    try:
        user = UserInDB(**new_user)
    except ValidationError as e:
        # TODO: Implement logs
        print(e.json())
        return {'error': "Invalid values. This error has been logged and we are looking for the cause. Thank you for "
                         "your patience."}

    try:
        users_db.create_document(user.dict(), throw_on_exists=True)
        return {'success': f"Hi {form_data.username},  welcome to Studium! :)"}

    except CloudantDatabaseException:
        return {'error': 'This email has been previously registered. If you believe this is an error please contact '
                         'me at jerlends@tuta.io'}


@app.post("/token", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    user = authenticate_user({'username': 'admin', 'password': 'password'}, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}


@app.get("/users/me/", response_model=User)
async def read_users_me(current_user: User = Depends(get_current_active_user)):
    return current_user


@app.get("/users/me/items/")
async def read_own_items(current_user: User = Depends(get_current_active_user)):
    return [{"item_id": "Foo", "owner": current_user.username}]


@app.on_event("startup")
def startup():
    print("Startup event received...")


@app.on_event("shutdown")
def shutdown():
    # TODO
    pass
