import os
from cloudant.client import CouchDB
from requests.adapters import HTTPAdapter

# TODO: lots to do... create an interface for creating and
# querying notes and users, set up configurations classes here

httpAdapter = HTTPAdapter(pool_connections=15, pool_maxsize=100)

conf = {
    'user': os.getenv("COUCHDB_USER"),
    'auth_token': os.getenv("COUCHDB_PASSWORD"),
    'url': os.getenv("COUCHDB_URL"),
    'connect': True
}

# TODO: Refactor
client = CouchDB(**conf)
