//get connection
const { Book, User } = require("../dbConnection.js");
//get utility functions
const { mapBookListToArray } = require("../util.js");

module.exports = async (req, res, next) => {
  const id = req.params.id;

  try {
    const book = await Book.findById(id);

    res.render("confirm-delete-book", {
      title: "Delete Book",
      data: {
        id: id,
        title: book.title,
      },
    });
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  }
};
