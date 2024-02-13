//get connection
const { Book, User } = require("../dbConnection.js");
//get utility functions
const { mapBookListToArray } = require("../util.js");

module.exports = async (req, res, next) => {
  try {
    const bookList = await Book.find({});

    const results = mapBookListToArray(bookList);

    res.render("books-admin", { title: "Books", results });
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  }
};
