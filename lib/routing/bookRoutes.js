// //get connection
// const { Book, User } = require("../dbConnection.js");
// //get utility functions
// const { mapBookListToArray } = require("../util.js");

// // async function displayBooksAdmin(req, res, next) {
// //   const bookList = await Book.find({});

// //   let results = mapBookListToArray(bookList);

// //   res.render("books-admin", { title: "Books", results });
// // }

// // async function displayBooksUser(req, res, next) {
// //   const bookList = await Book.find({});

// //   let results = mapBookListToArray(bookList);

// //   res.render("books-user", { title: "Books", results });
// // }

// // async function displayBookByIdAdmin(req, res, next) {
// //   const id = req.params.id;

// //   const book = await Book.findById(id);

// //   res.render("book-admin", {
// //     title: book.title,
// //     data: {
// //       id: book._id,
// //       title: book.title,
// //       author: book.author,
// //       genre: book.genre,
// //       isbn13: book.isbn13,
// //       isbn10: book.isbn10,
// //       description: book.description,
// //       releaseYear: book.releaseYear,
// //       ratings: book.ratings,
// //       avgRating:
// //         book.ratings.reduce((acc, curr) => {
// //           return acc + curr;
// //         }, 0) / book.ratings.length,
// //       reviews: book.reviews,
// //     },
// //   });
// // }

// // async function displayBookByIdUser(req, res, next) {
// //   const id = req.params.id;

// //   const book = await Book.findById(id);

// //   res.render("book-user", {
// //     title: book.title,
// //     data: {
// //       id: book._id,
// //       title: book.title,
// //       author: book.author,
// //       genre: book.genre,
// //       isbn13: book.isbn13,
// //       isbn10: book.isbn10,
// //       description: book.description,
// //       releaseYear: book.releaseYear,
// //       ratings: book.ratings,
// //       avgRating:
// //         book.ratings.reduce((acc, curr) => {
// //           return acc + curr;
// //         }, 0) / book.ratings.length,
// //       reviews: book.reviews,
// //     },
// //   });
// // }

// // function addBook(req, res, next) {
// //   res.render("books-add-view", { title: "Add Book" });
// // }

// // async function addBookToDatabase(req, res, next) {
// //   const { title, author, description, genre, isbn10, isbn13, releaseYear } =
// //     req.body;

// //   //parse authors and genres
// //   const authorArray = author.split(",");
// //   const cleanedAuthorsArray = authorArray.map((author) => author.trim());

// //   const genreArray = genre.split(",");
// //   const cleanedGenreArray = genreArray.map((genre) => genre.trim());

// //   const book = new Book({
// //     title,
// //     author: cleanedAuthorsArray,
// //     description,
// //     genre: cleanedGenreArray,
// //     isbn10,
// //     isbn13,
// //     releaseYear,
// //     ratings: [],
// //     reviews: [],
// //   });

// //   book.save();

// //   res.redirect("/books-admin");
// // }

// // async function editBook(req, res, next) {
// //   const id = req.params.id;

// //   const book = await Book.findById(id);

// //   res.render("books-edit-view", {
// //     title: "Edit Book",
// //     data: {
// //       id: book._id,
// //       title: book.title,
// //       author: book.author.join(", "),
// //       genre: book.genre.join(", "),
// //       isbn13: book.isbn13,
// //       isbn10: book.isbn10,
// //       description: book.description,
// //       releaseYear: book.releaseYear,
// //       ratings: book.ratings,
// //       avgRating:
// //         book.ratings.reduce((acc, curr) => {
// //           return acc + curr;
// //         }, 0) / book.ratings.length,
// //       reviews: book.reviews,
// //     },
// //   });
// // }

// // async function saveEditToDatabase(req, res, next) {
// //   const { id, title, author, genre, isbn10, isbn13, description, releaseYear } =
// //     req.body;

// //   //parse authors and genres
// //   const authorArray = author.split(",");
// //   const cleanedAuthorsArray = authorArray.map((author) => author.trim());

// //   const genreArray = genre.split(",");
// //   const cleanedGenreArray = genreArray.map((genre) => genre.trim());

// //   await Book.findByIdAndUpdate(id, {
// //     id,
// //     title,
// //     author: cleanedAuthorsArray,
// //     genre: cleanedGenreArray,
// //     isbn10,
// //     isbn13,
// //     description,
// //     releaseYear,
// //   });

// //   res.redirect("/books-admin");
// // }

// // async function deleteBook(req, res, next) {
// //   const id = req.params.id;

// //   const book = await Book.findById(id);

// //   res.render("confirm-delete-book", {
// //     title: "Delete Book",
// //     data: {
// //       id: id,
// //       title: book.title,
// //     },
// //   });
// // }

// // async function deleteBookAfterConfirm(req, res, next) {
// //   const id = req.body.id;

// //   await Book.findOneAndDelete({ _id: id });

// //   res.redirect("/books-admin");
// // }

// // async function addBookToReadList(req, res, next) {
// //   const id = req.params.id;

// //   const book = await Book.findById(id);
// //   const user = await User.findById("65b51e7974e4cfdd8a93281a");

// //   if (!user.read.includes(book.title)) {
// //     user.read.push(book.title);
// //   }

// //   await user.save();

// //   res.redirect("/books-user");
// // }

// // async function removeBookFromReadList(req, res, next) {
// //   const id = req.body.id;

// //   const book = await Book.findById(id);
// //   const user = await User.findById("65b51e7974e4cfdd8a93281a");

// //   if (user.read.includes(book.title)) {
// //     const idx = user.read.indexOf(book.title);
// //     user.read.splice(idx, 1);
// //   }

// //   await user.save();

// //   res.redirect("/books/read-list");
// // }

// // async function addBookToWantToReadList(req, res, next) {
// //   const id = req.params.id;

// //   const book = await Book.findById(id);
// //   const user = await User.findById("65b51e7974e4cfdd8a93281a");

// //   if (!user.toBeRead.includes(book.title)) {
// //     user.toBeRead.push(book.title);
// //   }

// //   await user.save();

// //   res.redirect("/books-user");
// // }

// // async function removeBookFromWantToReadList(req, res, next) {
// //   const id = req.body.id;

// //   const book = await Book.findById(id);
// //   const user = await User.findById("65b51e7974e4cfdd8a93281a");

// //   if (user.toBeRead.includes(book.title)) {
// //     const idx = user.toBeRead.indexOf(book.title);
// //     user.toBeRead.splice(idx, 1);
// //   }

// //   await user.save();

// //   res.redirect("/books/want-to-read-list");
// // }

// // async function searchForBooksAdmin(req, res, next) {
// //   const { bookTitle, bookAuthor, bookISBN } = req.query;
// //   let results = null;
// //   let bookList;

// //   if (bookTitle) {
// //     //search by title
// //     bookList = await Book.find({ title: bookTitle });
// //     results = mapBookListToArray(bookList);
// //     res.render("book-search-admin-results", { title: "Results", results });
// //   } else if (bookAuthor) {
// //     //search by author
// //     bookList = await Book.find({ author: { $in: [bookAuthor] } });
// //     results = mapBookListToArray(bookList);
// //     res.render("book-search-admin-results", { title: "Results", results });
// //   } else if (bookISBN) {
// //     //search by isbn
// //     bookList = await Book.find({
// //       $or: [{ isbn13: bookISBN }, { isbn10: bookISBN }],
// //     });
// //     results = mapBookListToArray(bookList);
// //     res.render("book-search-admin-results", { title: "Results", results });
// //   } else {
// //     // Handle the case when none of the criteria are provided
// //     res.render("book-search-admin-results", { title: "Results", results });
// //   }
// // }

// // async function searchForBooksUser(req, res, next) {
// //   const { bookTitle, bookAuthor, bookISBN } = req.query;
// //   let results = null;
// //   let bookList;

// //   if (bookTitle) {
// //     //search by title
// //     bookList = await Book.find({ title: bookTitle });
// //     results = mapBookListToArray(bookList);
// //     res.render("book-search-user-results", { title: "Results", results });
// //   } else if (bookAuthor) {
// //     //search by author
// //     bookList = await Book.find({ author: { $in: [bookAuthor] } });
// //     results = mapBookListToArray(bookList);
// //     res.render("book-search-user-results", { title: "Results", results });
// //   } else if (bookISBN) {
// //     //search by isbn
// //     bookList = await Book.find({
// //       $or: [{ isbn13: bookISBN }, { isbn10: bookISBN }],
// //     });
// //     results = mapBookListToArray(bookList);
// //     res.render("book-search-user-results", { title: "Results", results });
// //   } else {
// //     // Handle the case when none of the criteria are provided
// //     res.render("book-search-user-results", { title: "Results", results });
// //   }
// // }

// // async function displayUserReadList(req, res, next) {
// //   const user = await User.findById("65b51e7974e4cfdd8a93281a");
// //   const readList = user.read;
// //   const results = [];

// //   for (bookTitle of readList) {
// //     const bookObj = {};
// //     let book = await Book.findOne({ title: bookTitle });
// //     if (book) {
// //       bookObj["title"] = book.title;
// //       bookObj["author"] = book.author;
// //       bookObj["id"] = book._id.toString();
// //       results.push(bookObj);
// //     }
// //   }

// //   res.render("user-read", { title: "Read List", results });
// // }

// // async function displayUserWantToReadList(req, res, next) {
// //   const user = await User.findById("65b51e7974e4cfdd8a93281a");
// //   const readList = user.toBeRead;
// //   const results = [];

// //   for (bookTitle of readList) {
// //     const bookObj = {};
// //     let book = await Book.findOne({ title: bookTitle });
// //     if (book) {
// //       bookObj["title"] = book.title;
// //       bookObj["author"] = book.author;
// //       bookObj["id"] = book._id.toString();
// //       results.push(bookObj);
// //     }
// //   }

// //   res.render("user-want-to-read", { title: "Want to Read", results });
// // }

// // async function editUserProfile(req, res, next) {
// //   const user = await User.findById("65b51e7974e4cfdd8a93281a");
// //   const { firstName, lastName, email, bio } = user;

// //   res.render("user-profile-edit-view", {
// //     title: "Edit Profile",
// //     data: {
// //       firstName,
// //       lastName,
// //       email,
// //       bio,
// //     },
// //   });
// // }

// async function saveUserProfileEditToDatabase(req, res, next) {
//   const { firstName, lastName, email, bio } = req.body;

//   await User.findByIdAndUpdate("65b51e7974e4cfdd8a93281a", {
//     firstName,
//     lastName,
//     email,
//     bio,
//   });

//   res.redirect("/user");
// }

// module.exports = {
//   displayBooksAdmin,
//   displayBooksUser,
//   displayBookByIdAdmin,
//   displayBookByIdUser,
//   searchForBooksAdmin,
//   searchForBooksUser,
//   addBook,
//   addBookToDatabase,
//   editBook,
//   saveEditToDatabase,
//   deleteBook,
//   deleteBookAfterConfirm,
//   addBookToReadList,
//   addBookToWantToReadList,
//   removeBookFromReadList,
//   removeBookFromWantToReadList,
//   displayUserReadList,
//   displayUserWantToReadList,
//   editUserProfile,
//   saveUserProfileEditToDatabase,
// };
