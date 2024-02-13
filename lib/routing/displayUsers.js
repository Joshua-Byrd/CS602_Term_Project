//get connection
const { Book, User } = require("../dbConnection.js");
//get utility functions
const { mapBookListToArray, mapUserListToArray } = require("../util.js");

module.exports = async (req, res, next) => {
  try {
    const userList = await User.find({});
    const results = mapUserListToArray(userList);

    res.render("users", { title: "Users", results });
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  }
};
