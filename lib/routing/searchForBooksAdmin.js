//get connection
const { Book, User } = require("../dbConnection.js");
//get utility functions
const { mapBookListToArray } = require("../util.js");

module.exports = async (req, res, next) => {
  const { bookTitle, bookAuthor, bookISBN } = req.query;
  let results = null;
  let bookList;

  try {
    if (bookTitle) {
      // Search by title
      bookList = await Book.find({ title: bookTitle });
    } else if (bookAuthor) {
      // Search by author
      bookList = await Book.find({ author: { $in: [bookAuthor] } });
    } else if (bookISBN) {
      // Search by ISBN
      bookList = await Book.find({
        $or: [{ isbn13: bookISBN }, { isbn10: bookISBN }],
      });
    }
    results = mapBookListToArray(bookList);
    res.render("books-admin", { title: "Results", results });
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  }
};
