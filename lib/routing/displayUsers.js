//get connection
const { Book, User } = require("../dbConnection.js");
//get utility functions
const { mapBookListToArray, mapUserListToArray } = require("../util.js");

module.exports = async (req, res, next) => {
  const userList = await User.find({});
  const results = mapUserListToArray(userList);

  res.render("users", { title: "Users", results });
};
