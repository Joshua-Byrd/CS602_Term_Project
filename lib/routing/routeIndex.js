//requirements
const express = require("express");
const router = express.Router();
const dbConnection = require("../dbConnection.js");
// const bookRoutes = require("./bookRoutes.js");

//Route imports----------------------------------------------------------------

const searchForBooksUser = require("./searchForBooksUser.js");
const searchForBooksAdmin = require("./searchForBooksAdmin.js");
const displayBooksAdmin = require("./displayBooksAdmin.js");
const displayBooksUser = require("./displayBooksUser.js");
const displayBookByIdAdmin = require("./displayBookByIdAdmin.js");
const displayBookByIdUser = require("./displayBookByIdUser.js");
const addBook = require("./addBook.js");
const addBookToDatabase = require("./addBooktoDatabase.js");
const editBook = require("./editBook.js");
const saveEditToDatabase = require("./saveEditToDatabase.js");
const deleteBook = require("./deleteBook.js");
const deleteBookAfterConfirm = require("./deleteBookAfterConfirm.js");
const addBookToReadList = require("./addBookToReadList.js");
const removeBookFromReadList = require("./removeBookFromReadList.js");
const addBookToWantToReadList = require("./addBookToWantToReadList.js");
const removeBookFromWantToReadList = require("./removeBookFromWantToReadList.js");
const displayUserReadList = require("./displayUserReadList.js");
const displayUserWantToReadList = require("./displayUserWantToReadList.js");
const editUserProfile = require("./editUserProfile.js");
const saveUserProfileEditToDatabase = require("./saveUserProfileEditToDatabase.js");

//Routes-----------------------------------------------------------------

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

//admin home page
router.get("/admin", (req, res, next) => {
  res.render("home-admin", { title: "Admin" });
});

//admin search page
router.get("/admin/search", (req, res, next) => {
  res.render("book-search-admin", { title: "Book Search" });
});

//user search query
router.get("/user/search/query", searchForBooksUser);

//admin search query
router.get("/admin/search/query", searchForBooksAdmin);

//display all books with admin functionality
router.get("/books-admin", displayBooksAdmin);

//display all books with user functionality
router.get("/books-user", displayBooksUser);

//display book with given id and Admin functionality
router.get("/book-admin/:id", displayBookByIdAdmin);

//display book with given id and user functionality
router.get("/book-user/:id", displayBookByIdUser);

//display form to add book
router.get("/books/add", addBook);

//add new book to the database
router.post("/books/add", addBookToDatabase);

//display page to edit existing book
router.get("/books/edit/:id", editBook);

//save edited book to database
router.post("/books/edit/", saveEditToDatabase);

//display confirm delete view
router.get("/books/delete/:id", deleteBook);

//delete book after confirmation
router.post("/books/delete", deleteBookAfterConfirm);

//add book to read list
router.get("/books/read-list/:id", addBookToReadList);

//remove book from read list
router.post("/books/remove-read-list", removeBookFromReadList);

//add book to want-to-read list
router.get("/books/want-to-read-list/:id", addBookToWantToReadList);

//remove book from want-to-read-list
router.post("/books/remove-want-to-read-list", removeBookFromWantToReadList);

//display user read list
router.get("/books/read-list", displayUserReadList);

//display user want-to-read list
router.get("/books/want-to-read-list", displayUserWantToReadList);

//edit user profile
router.get("/user/profile/edit", editUserProfile);

//save user profile edit to database
router.post("/user/profile/edit", saveUserProfileEditToDatabase);

module.exports = router;
