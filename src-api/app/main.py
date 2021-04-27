import os
from datetime import timedelta, datetime

import sentry_sdk
from fastapi.security import OAuth2PasswordRequestForm
from fastapi import FastAPI, HTTPException, status, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import ValidationError
from cloudant import CouchDB
from cloudant.error import CloudantDatabaseException

from studium.core.datacontroller import Database
from studium.core.models import User, NewUser, UserInDB, UserLogin
from studium.core.security import authenticate_user, get_current_active_user, get_password_hash
from studium.core.jwt import create_access_token, ACCESS_TOKEN_EXPIRE_MINUTES

sentry_dsn = os.getenv("SENTRY_DSN")
sentry_sdk.init(sentry_dsn, traces_sample_rate=1.0)


client = CouchDB(**{
    'user': os.getenv("COUCHDB_USER"),
    'auth_token': os.getenv("COUCHDB_PASSWORD"),
    'url': os.getenv("COUCHDB_URL"),
    'connect': True})

client.connect()

# Database connection
db = Database()

users_db = db.get_users()


app = FastAPI(debug=True)


origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/create-account")
async def create_account(form_data: NewUser):
    """
    Creates an account where email is the unique field

    :param form_data:
    :return:
    """
    if form_data.password_one != form_data.password_two:
        return {'error': 'Passwords do not match.'}
    password = form_data.password_one

    if len(password) < 8:
        return {'error': 'The minimum password length is 8 characters.'}

    hashed_password = get_password_hash(password)

    account_creation_time = str(datetime.now())

    new_user = {
        '_id': form_data.email,
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


@app.post("/login")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):  # form_data: UserLogin
    # username == _id == email
    print(form_data)
    user = authenticate_user(form_data.username, form_data.password)

    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user._id}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}


@app.get("/users/me/", response_model=User)
async def read_users_me(current_user: User = Depends(get_current_active_user)):
    return current_user


@app.get("/users/account/")
async def read_own_items(current_user: User = Depends(get_current_active_user)):
    return [{"owner": current_user._id}]


@app.on_event("startup")
def startup():
    print("Startup event received...")


@app.on_event("shutdown")
def shutdown():
    # TODO
    pass
