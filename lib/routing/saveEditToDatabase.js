//get connection
const { Book, User } = require("../dbConnection.js");
//get utility functions
const { mapBookListToArray } = require("../util.js");

module.exports = async (req, res, next) => {
  const { id, title, author, genre, isbn10, isbn13, description, releaseYear } =
    req.body;

  //parse authors and genres
  const authorArray = author.split(",");
  const cleanedAuthorsArray = authorArray.map((author) => author.trim());

  const genreArray = genre.split(",");
  const cleanedGenreArray = genreArray.map((genre) => genre.trim());

  try {
    await Book.findByIdAndUpdate(id, {
      id,
      title,
      author: cleanedAuthorsArray,
      genre: cleanedGenreArray,
      isbn10,
      isbn13,
      description,
      releaseYear,
    });

    res.redirect("/books-admin");
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  }
};
