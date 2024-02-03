const mongoose = require("mongoose");
const dbUrl = "mongodb://127.0.0.1:27017/projectTestDb";
let connection = null;
let bookModel = null;
let authorModel = null;
let userModel = null;

//Create schemas and models-----------------------------------------------------
const bookSchema = new mongoose.Schema({
  title: String,
  author: [String],
  isbn13: String,
  isbn10: String,
  description: String,
  genre: [String],
  releaseYear: Number,
  ratings: [Number],
  reviews: [{ user: String, review: String }],
});

const authorSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  bio: String,
  booksWritten: [String],
});

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  admin: Boolean,
  read: [String],
  toBeRead: [String],
  bio: String,
});

//Export connection/models functions--------------------------------------------

module.exports = {
  getBookModel: () => {
    if (connection == null) {
      console.log("Creating connection and book model...");
      connection = mongoose.createConnection(dbUrl);
      bookModel = connection.model("Book", bookSchema);
    }
    return bookModel;
  },
  getAuthorModel: () => {
    if (connection == null) {
      console.log("Creating connection and author model...");
      connection = mongoose.createConnection(dbUrl);
      authorModel = connection.model("Author", authorSchema);
    }
    return authorModel;
  },
  getUserModel: () => {
    if (connection == null) {
      console.log("Creating connection and user model...");
      connection = mongoose.createConnection(dbUrl);
      userModel = connection.model("User", userSchema);
    }
    return authorModel;
  },
};
