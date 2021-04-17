import os
import couchdb
from typing import Optional


class DatabaseConfig:
    def __init__(self,
                 url: Optional[str], full_commit: Optional[bool] = True, session: Optional = None
                 ):
        self.url = _get_url(url)
        self.full_commit = full_commit
        self.session = session

    def _get_conf(self) -> dict:
        server_conf = {
            'url': self.url,
            'full_commit': self.full_commit,
            'session': self.session
        }
        return server_conf


def _get_url(url: str) -> str:
    server_url = url
    if len(server_url) < 17:  # https://1:2@3:5984/ == 18, TODO: check if port is set to < 4
        server_url = os.getenv("COUCHDB_URL", 'http://admin:password@couchdb:5984/')
    return server_url


class Database(DatabaseConfig):
    def __init__(self, url: Optional[str] = '', db_server: Optional[couchdb.Server] = None):
        super().__init__(url)
        self.db_server = db_server

    def connect(self):
        if self.db_server is None:
            server_conf = self._get_conf()
            server = couchdb.Server(**server_conf)
            print(f"No server passed in. Connecting to {self.url}")
            return server
        else:
            server = self.db_server
            print(f"Connecting to {self.url}")
            return server


API_V1_STR = "/api/v1"
