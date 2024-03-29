//get connection
const { Book, User } = require("../dbConnection.js");
//get utility functions
const { mapBookListToArray } = require("../util.js");

module.exports = async (req, res, next) => {
  const { firstName, lastName, email, bio, admin, id } = req.body;

  const isAdmin = Boolean(admin);

  try {
    await User.findByIdAndUpdate(id, {
      firstName,
      lastName,
      email,
      admin: isAdmin,
      bio,
    });

    res.redirect("/admin/users");
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  }
};
