const mongoose = require("mongoose");
const dbUrl = "mongodb://127.0.0.1:27017/cs602projectDb";
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

try {
  connection = mongoose.createConnection(dbUrl);

  connection.on("error", (error) => {
    console.error("MongoDB connection error:", error);
  });

  // Create models using the connection
  const Book = connection.model("Book", bookSchema);
  const User = connection.model("User", userSchema);

  // Export models
  module.exports = {
    Book,
    User,
  };
} catch (error) {
  console.log(`Error connecting to database: ${error}`);
}
