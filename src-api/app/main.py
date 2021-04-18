import os
from datetime import timedelta

# import uvicorn
import sentry_sdk
from fastapi import FastAPI, HTTPException, status, Depends
from fastapi.security import OAuth2PasswordRequestForm

from core.config import client
from core.models import User, Token
from core.security import authenticate_user, get_current_active_user
from core.jwt import create_access_token, ACCESS_TOKEN_EXPIRE_MINUTES

sentry_dsn = os.getenv("SENTRY_DSN")
sentry_sdk.init(sentry_dsn, traces_sample_rate=1.0)


# TODO: Create couchdb interface
session = client.session()


app = FastAPI()

# @app.post("/account/create")
# async def create_account():
#     pass


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
    metadata = client.metadata()
    print(metadata)
    print('Username: {0}'.format(session['userCtx']['name']))


@app.on_event("shutdown")
def shutdown():
    print("Disconnecting database")
    session.disconnect()

# if __name__ == "__main__":
#     uvicorn.run(app, host="0.0.0.0", port=80)
