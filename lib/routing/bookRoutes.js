const dbConnection = require("../dbConnection.js");
const Book = dbConnection.getBookModel();

async function displayBooks(req, res, next) {
  const bookList = await Book.find({});

  let results = bookList.map((book) => {
    return {
      id: book._id,
      title: book.title,
      author: book.author,
      genre: book.genre,
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
    };
  });
  console.log(bookList);
  res.render("books-admin", { title: "Books", results });
}

async function displayBooksUser(req, res, next) {
  const bookList = await Book.find({});

  let results = bookList.map((book) => {
    return {
      id: book._id,
      title: book.title,
      author: book.author,
      genre: book.genre,
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
    };
  });
  console.log(bookList);
  res.render("books-user", { title: "Books", results });
}

async function displayBookById(req, res, next) {
  const id = req.params.id;

  const book = await Book.findById(id);

  res.render("book-admin", {
    title: book.title,
    data: {
      id: book._id,
      title: book.title,
      author: book.author,
      genre: book.genre,
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
}
async function displayBookByIdUser(req, res, next) {
  const id = req.params.id;

  const book = await Book.findById(id);

  res.render("book-user", {
    title: book.title,
    data: {
      id: book._id,
      title: book.title,
      author: book.author,
      genre: book.genre,
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
}

module.exports = {
  displayBooks,
  displayBooksUser,
  displayBookById,
  displayBookByIdUser,
};
