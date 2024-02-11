//get connection
const { Book, User } = require("../dbConnection.js");
//get utility functions
const { mapBookListToArray } = require("../util.js");

module.exports = async (req, res, next) => {
  const id = req.body.id;

  await Book.findOneAndDelete({ _id: id });

  res.redirect("/books-admin");
};
