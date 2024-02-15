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
    try {
      bookList = await Book.find({ title: bookTitle });
      results = mapBookListToArray(bookList);
      // res.render("book-search-admin-results", { title: "Results", results });
      res.render("books-admin", { title: "Results", results });
    } catch (error) {
      console.log(`Something went wrong: ${error}`);
    }
  } else if (bookAuthor) {
    //search by author
    try {
      bookList = await Book.find({ author: { $in: [bookAuthor] } });
      results = mapBookListToArray(bookList);
      // res.render("book-search-admin-results", { title: "Results", results });
      res.render("books-admin", { title: "Results", results });
    } catch (error) {
      console.log(`Something went wrong: ${error}`);
    }
  } else if (bookISBN) {
    //search by isbn
    try {
      bookList = await Book.find({
        $or: [{ isbn13: bookISBN }, { isbn10: bookISBN }],
      });
      results = mapBookListToArray(bookList);
      // res.render("book-search-admin-results", { title: "Results", results });
      res.render("books-admin", { title: "Results", results });
    } catch (error) {
      console.log(`Something went wrong: ${error}`);
    }
  } else {
    // Handle the case when none of the criteria are provided
    // res.render("book-search-admin-results", { title: "Results", results });
    res.render("books-admin", { title: "Results", results });
  }
};
