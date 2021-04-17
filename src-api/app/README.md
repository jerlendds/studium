
CouchDB doesn't auto create system databases, we have to create the following manually

`_global_changes`, `_replicator`, and `_users`

e.g.
`curl -u username:password -X PUT http://127.0.0.1:5984/_users`


`curl  -X GET http://notes:password@0.0.0.0:5984/_all_dbs`

CouchDB configuration is specified in `.ini` files in `/opt/couchdb/etc`.

To get a list of databases run
```sh
curl -u username:password -X GET http://127.0.0.1:5984/_all_dbs
```


A CouchDB server hosts named databases, which store uniquely named documents.
- documents consist of any number of fields and attachments
- contains metadata that's maintained by the database system
- document fields are uniquely named and contain values of varying types (text, number booleans, lists, etc)
- no set limit to text side or element count

Document edits are made by:
- client apps loading documents
- applying changes
- saving them back to the database

If another client editing the same document saves their changes first,
the client gets an edit conflict error on save. To resolve the update conflict:
- open the latest document version
- reapply edits
- try update again


CouchDB file layout and commitment system features all Atomic Consistent
Isolated Durable [ACID](https://en.wikipedia.org/wiki/ACID) properties.


Document updates (add, edit, delete) are serialized, except for binary  
blobs which are written concurrently. Any number of clients can be reading  
documents without being locked out or interrupted by concurrent updates,  
 even on the same d ates, even on the same document.


CouchDB read operations use a [Multi-Version Concurrency Control (MVCC)](https://en.wikipedia.org/wiki/Multiversion_concurrency_control) model where each client sees a consistent snapshot of the database from the beginning to the end of the read operation.  
CouchDB can guarantee transactional semantics on a per-document basis.
