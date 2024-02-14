# About

This repository contains my term project for CS602 - Server-side Web Development at Boston University's Metropolitan College. In this project, I have built a web server with the intention of recreating some of the basic functionality of GoodReads.com, the popular book logging and review website. A user can search for books (by author, title, or ISBN) and add them to their _read_ or _want-to-read_ list, and view and edit their own profile. An administrator can view and search for both users or books, as well as add, edit, or delete users or books.

One things to note: No sessions or cookies are used here. Users and admins are simulated by rendering different pages for each, with different functionality. This means there is a great deal of redundancy (DRY principle violations) that wouldn't be necessary if I were actually using logins.

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
