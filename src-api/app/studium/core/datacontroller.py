import os

from cloudant import CouchDB
from cloudant.error import CloudantClientException


class Database:

    def __init__(self):
        self.user = os.getenv("COUCHDB_USER")
        self.password = os.getenv("COUCHDB_PASSWORD")
        self.url = os.getenv("COUCHDB_URL")
        self.connect = True
        self.client = CouchDB(**{
            'user': self.user,
            'auth_token': self.password,
            'url': self.url,
            'connect': self.connect})

    def get_users(self):
        self.client.connect()
        try:
            users_db = self.client['users']

        except KeyError as e:
            print(e)
            users_db = 'users'
            print(f"[CouchDB] Creating database: {users_db}")
            users_db = self.client.create_database(users_db, partitioned=False)

        return users_db

    def get_notes(self):
        # Todo
        pass
