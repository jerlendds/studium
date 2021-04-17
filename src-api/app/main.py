import os
import sentry_sdk
# import uvicorn
from pydantic import BaseModel
from typing import Optional

from fastapi import FastAPI
from core.config import Database


from datetime import datetime


sentry_dsn = os.getenv("SENTRY_DSN")
sentry_sdk.init(sentry_dsn, traces_sample_rate=1.0)


class User(BaseModel):
    username: str
    email: str
    disabled: Optional[bool] = False
    is_superuser: Optional[bool] = False
    is_verified: Optional[bool] = False
    account_type: str = "free"  # free || basic || pro
    ctime: str = str(datetime.now())  # Creation time


class UserInDB(User):
    hashed_password: str


app = FastAPI()


@app.on_event("startup")
def startup():
    data = Database()
    data.connect()


# if __name__ == "__main__":
#     uvicorn.run(app, host="0.0.0.0", port=80)
