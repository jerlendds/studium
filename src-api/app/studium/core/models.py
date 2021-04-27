import os
from datetime import datetime
from typing import Optional

from pydantic import BaseModel, Extra, EmailStr

SECRET_KEY = os.getenv("SUPER_SECRET_KEY")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24 * 7


class NewUser(BaseModel):
    username: str
    email: str
    password_one: str
    password_two: str


class UserLogin(BaseModel):
    username: str
    password: str


# _id == email
class User(BaseModel):
    username: str
    # TODO: look into pydantic and determine how...
    # .. to return `_id` key for .dict() when `email` key is given
    _id: EmailStr  # _id == email
    account_type: str = "free"  # free || basic || pro
    disabled: Optional[bool] = False
    ctime: str = str(datetime.now())
    stats: Optional[dict] = None

    class Config:
        extra = Extra.allow


class UserInDB(User):
    hashed_password: str
    is_superuser: Optional[bool] = False
    is_verified: Optional[bool] = False
    last_seen: Optional[str] = None


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    user_email: Optional[str] = None
