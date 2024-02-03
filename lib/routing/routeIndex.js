//requirements
const express = require("express");
const router = express.Router();
const dbConnection = require("../dbConnection.js");
const bookRoutes = require("./bookRoutes.js");
const authorRoutes = require("./authorRoutes.js");
const userRoutes = require("./userRoutes.js");

//routes------------------------------------------------------------------------

//splash page
router.get("/", (req, res, next) => {
  res.render("home", { title: "Home" });
});
//user home page
router.get("/user", (req, res, next) => {
  res.render("home-user", { title: "User" });
});

//admin home page
router.get("/admin", (req, res, next) => {
  res.render("home-admin", { title: "Admin" });
});

//display all books with admin functionality
router.get("/books-admin", bookRoutes.displayBooks);

//display all books with user functionality
router.get("/books-user", bookRoutes.displayBooksUser);

//display book with given id and Admin functionality
router.get("/book-admin/:id", bookRoutes.displayBookById);

//display book with given id and user functionality
router.get("/book-user/:id", bookRoutes.displayBookByIdUser);

module.exports = router;
