//get connection
const { Book, User } = require("../dbConnection.js");
//get utility functions
const { mapBookListToArray } = require("../util.js");

module.exports = async (req, res, next) => {
  const { firstName, lastName, email, bio } = req.body;

  try {
    const user = await User.findOne({ firstName: "John", lastName: "Doe" });

    await user.updateOne({
      firstName,
      lastName,
      email,
      bio,
    });

    res.redirect("/user/profile");
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  }
};
