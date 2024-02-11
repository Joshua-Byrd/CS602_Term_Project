//get connection
const { Book, User } = require("../dbConnection.js");
//get utility functions
const { mapBookListToArray } = require("../util.js");

module.exports = async (req, res, next) => {
  const id = req.body.id;

  const book = await Book.findById(id);
  const user = await User.findById("65b51e7974e4cfdd8a93281a");

  if (user.toBeRead.includes(book.title)) {
    const idx = user.toBeRead.indexOf(book.title);
    user.toBeRead.splice(idx, 1);
  }

  await user.save();

  res.redirect("/books/want-to-read-list");
};