//get connection
const { Book, User } = require("../dbConnection.js");
//get utility functions
const { mapBookListToArray } = require("../util.js");

module.exports = async (req, res, next) => {
  const { firstName, lastName, email, bio } = req.body;

  await User.findByIdAndUpdate("65b51e7974e4cfdd8a93281a", {
    firstName,
    lastName,
    email,
    bio,
  });

  res.redirect("/user");
};
