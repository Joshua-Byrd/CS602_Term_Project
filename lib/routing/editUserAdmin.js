//get connection
const { Book, User } = require("../dbConnection.js");
//get utility functions
const { mapBookListToArray } = require("../util.js");

module.exports = async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findById(id);
  const { firstName, lastName, email, admin, bio } = user;

  res.render("user-edit-view", {
    title: "Edit User",
    data: {
      firstName,
      lastName,
      admin,
      email,
      bio,
      id,
    },
  });
};
