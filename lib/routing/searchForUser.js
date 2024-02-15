//get connection
const { Book, User } = require("../dbConnection.js");
//get utility functions
const { mapUserListToArray } = require("../util.js");

module.exports = async (req, res, next) => {
  const { userName, userEmail } = req.query;
  let results = null;
  let userList;

  if (userName) {
    //parse the incoming name
    const nameArray = userName.split(" ");
    const cleanNameArray = nameArray.map((name) => name.trim());
    //search by last name if only a single name submitted
    if (cleanNameArray.length === 1) {
      try {
        userList = await User.find({ lastName: nameArray[0] });
        results = mapUserListToArray(userList);
        res.render("users", { title: "Users", results });
      } catch (error) {
        console.log(`Something went wrong: ${error}`);
      }
    } else {
      const firstName = cleanNameArray[0];
      const lastName = cleanNameArray[cleanNameArray.length - 1];

      try {
        userList = await User.find({ firstName, lastName });
        results = mapUserListToArray(userList);
        res.render("users", { title: "Users", results });
      } catch (error) {
        console.log(`Something went wrong: ${error}`);
      }
    }
  } else if (userEmail) {
    try {
      userList = await User.find({ email: userEmail });
      results = mapUserListToArray(userList);
      res.render("users", { title: "Users", results });
    } catch (error) {
      console.log(`Something went wrong: ${error}`);
    }
  } else {
    res.render("users", { title: "Users", results });
  }
};
