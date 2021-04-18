import os
from datetime import datetime
from typing import Optional
from pydantic import BaseModel

SECRET_KEY = os.getenv("SUPER_SECRET_KEY")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24 * 7


fake_users_db = {
    "johndoe": {
        "username": "johndoe",
        "full_name": "John Doe",
        "email": "johndoe@example.com",
        "hashed_password": "$2b$12$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW",
        "disabled": False
    }
}


class User(BaseModel):
    username: str
    email: str
    account_type: str = "free"  # free || basic || pro
    disabled: Optional[bool] = False


class UserInDB(User):
    hashed_password: str
    ctime: str = str(datetime.now())
    is_superuser: Optional[bool] = False
    is_verified: Optional[bool] = False


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: Optional[str] = None
