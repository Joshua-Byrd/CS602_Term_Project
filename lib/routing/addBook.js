//get connection
const { Book, User } = require("../dbConnection.js");
//get utility functions
const { mapBookListToArray } = require("../util.js");

module.exports = (req, res, next) => {
  res.render("books-add-view", { title: "Add Book" });
};
