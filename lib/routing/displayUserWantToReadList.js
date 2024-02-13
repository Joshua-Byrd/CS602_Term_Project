//get connection
const { Book, User } = require("../dbConnection.js");
//get utility functions
const { mapBookListToArray } = require("../util.js");

module.exports = async (req, res, next) => {
  try {
    const user = await User.findById("65b51e7974e4cfdd8a93281a");
    const readList = user.toBeRead;
    const results = [];

    for (bookTitle of readList) {
      const bookObj = {};
      let book = await Book.findOne({ title: bookTitle });
      if (book) {
        bookObj["title"] = book.title;
        bookObj["author"] = book.author;
        bookObj["id"] = book._id.toString();
        results.push(bookObj);
      }
    }

    res.render("user-want-to-read", { title: "Want to Read", results });
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  }
};
