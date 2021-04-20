from passlib.context import CryptContext
from jose import JWTError, jwt
from fastapi.security import OAuth2PasswordBearer
from fastapi import Depends, HTTPException, status

from .jwt import SECRET_KEY, ALGORITHM
from .models import UserInDB, TokenData, User
from .datacontroller import Database


database = Database()
users_db = database.get_users()

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password):
    return pwd_context.hash(password)


def get_user(user_email: str):
    try:
        user_dict = users_db[user_email]
        return UserInDB(**user_dict)
    except Exception as e:
        print(e)


def authenticate_user(user_email: str, password: str):
    user = get_user(user_email)
    if not user:
        print(user)
        return False
    if not verify_password(password, user.hashed_password):
        return False
    return user


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        user_email: str = payload.get("sub")
        print(user_email)
        if user_email is None:
            raise credentials_exception
        token_data = TokenData(user_email=user_email)
    except JWTError:
        raise credentials_exception
    user = get_user(user_email=token_data.user_email)
    if user is None:
        raise credentials_exception
    user.__delattr__('hashed_password')
    user.__delattr__('_rev')
    user.__delattr__('is_superuser')
    return user


async def get_current_active_user(current_user: User = Depends(get_current_user)):
    if current_user.disabled:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user
