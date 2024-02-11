//get connection
const { Book, User } = require("../dbConnection.js");
//get utility functions
const { mapBookListToArray } = require("../util.js");

module.exports = async (req, res, next) => {
  const { bookTitle, bookAuthor, bookISBN } = req.query;
  let results = null;
  let bookList;

  if (bookTitle) {
    //search by title
    bookList = await Book.find({ title: bookTitle });
    results = mapBookListToArray(bookList);
    res.render("book-search-user-results", { title: "Results", results });
  } else if (bookAuthor) {
    //search by author
    bookList = await Book.find({ author: { $in: [bookAuthor] } });
    results = mapBookListToArray(bookList);
    res.render("book-search-user-results", { title: "Results", results });
  } else if (bookISBN) {
    //search by isbn
    bookList = await Book.find({
      $or: [{ isbn13: bookISBN }, { isbn10: bookISBN }],
    });
    results = mapBookListToArray(bookList);
    res.render("book-search-user-results", { title: "Results", results });
  } else {
    // Handle the case when none of the criteria are provided
    res.render("book-search-user-results", { title: "Results", results });
  }
};
