//requirements
const express = require("express");
const router = express.Router();
const dbConnection = require("../dbConnection.js");
const bookRoutes = require("./bookRoutes.js");

//routes------------------------------------------------------------------------

//splash page
router.get("/", (req, res, next) => {
  res.render("home", { title: "Home" });
});

//user home page
router.get("/user", (req, res, next) => {
  res.render("home-user", { title: "User" });
});

//user search page
router.get("/user/search", (req, res, next) => {
  res.render("book-search-user", { title: "Book Search" });
});

//user search query
router.get("/user/search/query", bookRoutes.searchForBooksUser);

//admin home page
router.get("/admin", (req, res, next) => {
  res.render("home-admin", { title: "Admin" });
});

//admin search page
router.get("/admin/search", (req, res, next) => {
  res.render("book-search-admin", { title: "Book Search" });
});

//admin search query
router.get("/admin/search/query", bookRoutes.searchForBooksAdmin);

//display all books with admin functionality
router.get("/books-admin", bookRoutes.displayBooksAdmin);

//display all books with user functionality
router.get("/books-user", bookRoutes.displayBooksUser);

//display book with given id and Admin functionality
router.get("/book-admin/:id", bookRoutes.displayBookByIdAdmin);

//display book with given id and user functionality
router.get("/book-user/:id", bookRoutes.displayBookByIdUser);

//display form to add book
router.get("/books/add", bookRoutes.addBook);

//add new book to the database
router.post("/books/add", bookRoutes.addBookToDatabase);

//display page to edit existing book
router.get("/books/edit/:id", bookRoutes.editBook);

//save edited book to database
router.post("/books/edit/", bookRoutes.saveEditToDatabase);

//display confirm delete view
router.get("/books/delete/:id", bookRoutes.deleteBook);

//delete book after confirmation
router.post("/books/delete", bookRoutes.deleteBookAfterConfirm);

//add book to read list
router.get("/books/read-list/:id", bookRoutes.addBookToReadList);

//add book to want-to-read list
router.get("/books/want-to-read-list/:id", bookRoutes.addBookToWantToReadList);

module.exports = router;
