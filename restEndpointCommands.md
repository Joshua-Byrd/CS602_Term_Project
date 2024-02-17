# Commands for Testing JSON/XML endpoints

## Get all books in JSON format

```
curl -H "Accept:application/json" http://localhost:3000/books-user;echo
```

## Get all books in XML format

```
curl -H "Accept:application/xml" http://localhost:3000/books-user
```
