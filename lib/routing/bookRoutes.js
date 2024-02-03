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

function addBook(req, res, next) {
  res.render("books-add-view", { title: "Add Book" });
}

async function addBookToDatabase(req, res, next) {
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
}

async function editBook(req, res, next) {
  const id = req.params.id;

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
}

async function saveEditToDatabase(req, res, next) {
  const { id, title, author, genre, isbn10, isbn13, description, releaseYear } =
    req.body;

  //parse authors and genres
  const authorArray = author.split(",");
  const cleanedAuthorsArray = authorArray.map((author) => author.trim());

  const genreArray = genre.split(",");
  const cleanedGenreArray = genreArray.map((genre) => genre.trim());

  await Book.findByIdAndUpdate(id, {
    id,
    title,
    author,
    genre,
    isbn10,
    isbn13,
    description,
    releaseYear,
  });

  res.redirect("/books-admin");
}

module.exports = {
  displayBooks,
  displayBooksUser,
  displayBookById,
  displayBookByIdUser,
  addBook,
  addBookToDatabase,
  editBook,
  saveEditToDatabase,
};
