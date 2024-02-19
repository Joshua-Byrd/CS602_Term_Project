//get connection
const { Book, User } = require("../dbConnection.js");
//get utility functions
const { mapBookListToArray } = require("../util.js");

module.exports = async (req, res, next) => {
  const id = req.body.id;

  try {
    const book = await Book.findById(id);
    const user = await User.findOne({ firstName: "John", lastName: "Doe" });

    if (user.read.includes(book.title)) {
      const idx = user.read.indexOf(book.title);
      user.read.splice(idx, 1);
    }

    await user.save();

    res.redirect("/books/read-list");
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  }
};
