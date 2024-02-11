//get connection
const { Book, User } = require("../dbConnection.js");
//get utility functions
const { mapBookListToArray } = require("../util.js");

module.exports = async (req, res, next) => {
  const { title, author, description, genre, isbn10, isbn13, releaseYear } =
    req.body;

  //parse authors and genres
  const authorArray = author.split(",");
  const cleanedAuthorsArray = authorArray.map((author) => author.trim());

  const genreArray = genre.split(",");
  const cleanedGenreArray = genreArray.map((genre) => genre.trim());

  const book = new Book({
    title,
    author: cleanedAuthorsArray,
    description,
    genre: cleanedGenreArray,
    isbn10,
    isbn13,
    releaseYear,
    ratings: [],
    reviews: [],
  });

  book.save();

  res.redirect("/books-admin");
};
