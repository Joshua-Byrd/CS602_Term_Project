//get connection
const { Book, User } = require("../dbConnection.js");
//get utility functions
const { mapBookListToArray } = require("../util.js");

module.exports = async (req, res, next) => {
  const bookList = await Book.find({});

  let results = mapBookListToArray(bookList);

  res.render("books-admin", { title: "Books", results });
};
