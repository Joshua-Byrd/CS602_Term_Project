//get connection
const { Book, User } = require("../dbConnection.js");
//get utility functions
const { mapBookListToArray } = require("../util.js");

module.exports = async (req, res, next) => {
  const { firstName, lastName, email, admin, bio } = req.body;

  const isAdmin = Boolean(admin) || false;

  const user = new User({
    firstName,
    lastName,
    email,
    admin: isAdmin,
    read: [],
    toBeRead: [],
    bio,
  });

  user.save();

  res.redirect("/admin/users");
};
