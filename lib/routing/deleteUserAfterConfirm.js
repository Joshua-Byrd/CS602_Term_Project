//get connection
const { Book, User } = require("../dbConnection.js");
//get utility functions
const { mapBookListToArray } = require("../util.js");

module.exports = async (req, res, next) => {
  const id = req.body.id;

  try {
    await User.findOneAndDelete({ _id: id });

    res.redirect("/admin/users");
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  }
};
