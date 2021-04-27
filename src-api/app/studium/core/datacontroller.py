import os

from cloudant import CouchDB
# Might need the below? Im not sure, got this exception once but unsure of conditions...
# from cloudant.error import CloudantClientException


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
        """ Returns a connection to the users database.
        :return:
        """
        users_db_name = 'users'
        self.client.connect()
        try:
            users_db = self.client[users_db_name]

        except KeyError as e:
            print(e)
            print(f"[CouchDB] Creating database: {users_db_name}")
            users_db = self.client.create_database(users_db_name, partitioned=False)
        return users_db

    def get_notes(self):
        """ Returns a connection to the notes database.
        Each note SHOULD BE partitioned to the appropriate user `_id` (aka email)
        :return:
        """
        notes_db_name = 'notes'
        try:
            notes_db = self.client[notes_db_name]
        except KeyError as e:
            print(e)
            print(f"[CouchDB] Creating database: {notes_db_name}")
            notes_db = self.client.create_database(notes_db_name, partitioned=True)
        return notes_db
