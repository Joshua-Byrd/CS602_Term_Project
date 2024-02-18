//requirements
const express = require("express");
const router = express.Router();
const dbConnection = require("../dbConnection.js");

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
const displayUsers = require("./displayUsers.js");
const editUserAdmin = require("./editUserAdmin.js");
const saveUserEditToDataBase = require("./saveUserEditToDatabase.js");
const deleteUser = require("./deleteUser.js");
const deleteUserAfterConfirm = require("./deleteUserAfterConfirm.js");
const addUser = require("./addUser.js");
const addUserToDataBase = require("./addUserToDatabase.js");
const displayUserProfile = require("./displayUserProfile.js");
const searchForUser = require("./searchForUser.js");

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

//admin book search page
router.get("/admin/search", (req, res, next) => {
  res.render("book-search-admin", { title: "Book Search" });
});

//admin user search page
router.get("/admin/search-user", (req, res, next) => {
  res.render("user-search", { title: "User Search" });
});

//admin user search query
router.get("/admin/search-user/query", searchForUser);

//user book search query
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
router.post("/books/read-list", addBookToReadList);

//remove book from read list
router.post("/books/remove-read-list", removeBookFromReadList);

//add book to want-to-read list
router.post("/books/want-to-read-list", addBookToWantToReadList);

//remove book from want-to-read-list
router.post("/books/remove-want-to-read-list", removeBookFromWantToReadList);

//display user read list
router.get("/books/read-list", displayUserReadList);

//display user want-to-read list
router.get("/books/want-to-read-list", displayUserWantToReadList);

//display user profile
router.get("/user/profile", displayUserProfile);

//edit user profile
router.get("/user/profile/edit", editUserProfile);

//save user profile edit to database
router.post("/user/profile/edit", saveUserProfileEditToDatabase);

//display all users for admins
router.get("/admin/users", displayUsers);

//display page to edit existing user
router.get("/admin/user/edit/:id", editUserAdmin);

//save edited user to database
router.post("/admin/user/edit/", saveUserEditToDataBase);

//display confirm delete user page
router.get("/admin/user/delete/:id", deleteUser);

//delete user from database
router.post("/admin/user/delete", deleteUserAfterConfirm);

//display add user view
router.get("/admin/user/add", addUser);

//add user to database
router.post("/admin/user/add", addUserToDataBase);

module.exports = router;
