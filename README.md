# About

This repository contains my term project for CS602 - Server-side Web Development at Boston University's Metropolitan College. In this project, I have built a web server with the intention of recreating some of the basic functionality of GoodReads.com, the popular book logging and review website. A user can search for books (by author, title, or ISBN) and add them to their _read_ or _want-to-read_ list, and view and edit their own profile. An administrator can view and search for both users or books, as well as add, edit, or delete users or books.

One thing to note: No sessions or cookies are used here. Users and admins are simulated by rendering different pages for each, with different functionality. This means there is a great deal of redundancy (DRY principle violations) that wouldn't be necessary if I were actually using logins.

**IMPORTANT: DO NOT CHANGE THE NAME OF THE USER 'JONH DOE'!** Because I'm simulating a user being logged in, all of the functions that manipulate a user in the database, work on this user specifically. And, because MongoDB assigns id's dynamically, I'm using the name to find and manipulate the user in the database. Thus, if this user's name is changed, all of the user functions will break.

## Stack

This project uses Node.js and Express.js for the server architecture, and Express-handlebars is used for the template engine. It also utilizes a MongoDB database with Mongoose as ODM. Since the focus of this project is on the server-side, very little has been done on the front-end beyond the basics. However, Bootstrap has been added to make it look somewhat decent.

## Setup

If you are downloading this from Github, then follow [Github's](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) instructions for cloning a repository. Then follow the instructions below.

1. In a terminal, navigate to the main directory and run

```
npm install
```

to install all necessary modules.

2. Make sure that MongoDB is installed and the MongoDB daemon is running in the background.

3. Run the seed.js file like so:

```
node seed.js
```

This will create and populate the database with books and users.

4. After the database has populated, again from the main directory run

```
node average_reads.js
```

to start the server. While the server is running, you can access the main page at `http://localhost:3000/`. To change the default port, edit the following code in average_reads.js:

```
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
```

## Directory Structure

The main directory contains only the main JavaScript file, `average_reads.js`, the `package.json` file, this README, and the `seed.js`. Subdirectories contain all other files in the following format:

- /public - all static files
- /public/css - all CSS files
- /public/img - all image files
- /views - all views to be rendered
- /views/partials - partial views for navbar
- /views/layouts - contains the main layout file
- /lib - contains various files and directories used in the the execution of the server
- /lib/routing - all JavaScript route files as well as `routeIndex.js` which is required by the main file

Some additional notes: `dbConnection.js` exports a connection to the database and the models used to access the book and user collections. `util.js` contains helper functions that are used in the processing of data retrieved from the database. The node_modules directory is **not** contained in this repository but will be created when `npm install` is ran during setup.

## Routes

| Route                           | HTTP | Function                                                        |
| ------------------------------- | ---- | --------------------------------------------------------------- |
| /                               | GET  | Render the splash page view                                     |
| /user                           | GET  | Render the user's home page view                                |
| /admin                          | GET  | Render the admin's home page view                               |
| /user/search                    | GET  | Render the user's book search view                              |
| /user/search/query              | GET  | Render the result of the user's book search                     |
| /books-user                     | GET  | Render the view for all books with user functionality           |
| /book-user/:id                  | GET  | Render the view for the specified book with user functionality  |
| /admin/search                   | GET  | Render the admin's book search view                             |
| /admin/search/query             | GET  | Render the result of the admin's book search                    |
| /admin/search-user              | GET  | Render the admin's user search view                             |
| /admin/search-user/query        | GET  | Render the results of the user search                           |
| /books-admin                    | GET  | Render the view for all books with admin functionality          |
| /book-admin/:id                 | GET  | Render the view for the specified book with admin functionality |
| /books/add                      | GET  | Render form to add a book                                       |
| /books/add                      | POST | Add book to the database                                        |
| /books/edit/:id                 | GET  | Render form to edit existing book                               |
| /books/edit                     | POST | Update existing book in the database                            |
| /books/delete/:id               | GET  | Render the confirmation page to delete the specified book       |
| /books/delete                   | POST | Delete book from the database                                   |
| /books/read-list                | POST | Add book to user's _read_ list                                  |
| /books/want-to-read-list        | POST | Add book to user's _want-to-read_ list                          |
| /books/remove-read-list         | POST | Remove book from user's _read_ list                             |
| /books/remove-want-to-read-list | POST | Remove book from user's _want-to-read_ list                     |
| /books/read-list                | GET  | Render user's _read_ list view                                  |
| /books/want-to-read-list        | GET  | Render user's _want-to-read_ list view                          |
| /user/profile                   | GET  | Render user's profile view                                      |
| /user/profile/edit              | GET  | Render view to edit user's profile                              |
| /admin/users                    | GET  | Render all users for admins                                     |
| /admin/users/edit/:id           | GET  | Render form to edit the specified user                          |
| /admin/user/edit/               | POST | Udate user in the database                                      |
| /admin/users/delete/:id         | GET  | Render confirmation page to delete the specified user           |
| /admin/user/delete              | POST | delete user from the database                                   |
| /admin/user/add                 | GET  | Render view to add user                                         |
| /admin/user/add                 | POST | Add new user to database                                        |

# XML and JSON

Endpoints are provided for both XML and JSON format to either retrieve all books in the database or to retrieve a list of books based on title, author, or ISBN. For testing purposes, you can use the following commands (or substitute any valid title, author, or ISBN in the query string):

## Get all books in JSON format

```
curl -H "Accept:application/json" http://localhost:3000/books-user;echo
```

## Get all books in XML format

```
curl -H "Accept:application/xml" http://localhost:3000/books-user
```

## Get individual books in JSON by title, author, or ISBN

```
curl -H "Accept:application/json" http://localhost:3000/user/search/query?bookTitle=1984;echo

curl -H "Accept:application/json" http://localhost:3000/user/search/query?bookAuthor=Chuck+Palahniuk;echo

curl -H "Accept:application/json" http://localhost:3000/user/search/query?bookISBN=978-0866118705;echo
```

## Get individual books in XML by title, author, or ISBN

```
curl -H "Accept:application/xml" http://localhost:3000/user/search/query?bookTitle=1984

curl -H "Accept:application/xml" http://localhost:3000/user/search/query?bookAuthor=Chuck+Palahniuk

curl -H "Accept:application/xml" http://localhost:3000/user/search/query?bookISBN=978-0866118705
```
