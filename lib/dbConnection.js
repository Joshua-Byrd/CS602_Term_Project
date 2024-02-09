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

connection = mongoose.createConnection(dbUrl);

// Create models using the connection
const Book = connection.model("Book", bookSchema);
const Author = connection.model("Author", authorSchema);
const User = connection.model("User", userSchema);

// Export models
module.exports = {
  Book,
  Author,
  User,
};
