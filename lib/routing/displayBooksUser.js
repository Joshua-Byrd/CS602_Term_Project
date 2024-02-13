//get connection
const { Book, User } = require("../dbConnection.js");
//get utility functions
const { mapBookListToArray } = require("../util.js");

module.exports = async (req, res, next) => {
  try {
    const bookList = await Book.find({});

    let results = mapBookListToArray(bookList);

    res.render("books-user", { title: "Books", results });
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  }
};
