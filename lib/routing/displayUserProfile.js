//get connection
const { Book, User } = require("../dbConnection.js");
//get utility functions
const { mapBookListToArray } = require("../util.js");

module.exports = async (req, res, next) => {
  try {
    const user = await User.findById("65b51e7974e4cfdd8a93281a");
    const { firstName, lastName, email, bio } = user;

    res.render("user-profile-view", {
      title: "Profile",
      data: {
        firstName,
        lastName,
        email,
        bio,
      },
    });
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  }
};
