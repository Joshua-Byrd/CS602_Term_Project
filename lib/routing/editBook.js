//get connection
const { Book, User } = require("../dbConnection.js");
//get utility functions
const { mapBookListToArray } = require("../util.js");

module.exports = async (req, res, next) => {
  const id = req.params.id;

  try {
    const book = await Book.findById(id);

    res.render("books-edit-view", {
      title: "Edit Book",
      data: {
        id: book._id,
        title: book.title,
        author: book.author.join(", "),
        genre: book.genre.join(", "),
        isbn13: book.isbn13,
        isbn10: book.isbn10,
        description: book.description,
        releaseYear: book.releaseYear,
        ratings: book.ratings,
        avgRating:
          book.ratings.reduce((acc, curr) => {
            return acc + curr;
          }, 0) / book.ratings.length,
        reviews: book.reviews,
      },
    });
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  }
};
