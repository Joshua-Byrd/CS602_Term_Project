//get connection
const { Book, User } = require("../dbConnection.js");
//get utility functions
const { mapBookListToArray } = require("../util.js");

module.exports = async (req, res, next) => {
  const id = req.params.id;

  const book = await Book.findById(id);
  const user = await User.findById("65b51e7974e4cfdd8a93281a");

  if (!user.read.includes(book.title)) {
    user.read.push(book.title);
  }

  await user.save();

  res.redirect("/books/read-list");
};
