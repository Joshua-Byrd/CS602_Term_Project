//get connection
const { Book, User } = require("../dbConnection.js");
//get utility functions
const { mapUserListToArray } = require("../util.js");

module.exports = async (req, res, next) => {
  const { userName, userEmail } = req.query;
  let results = null;
  let userList;

  try {
    if (userName) {
      const nameArray = userName.split(" ");
      const cleanNameArray = nameArray.map((name) => name.trim());

      let query;

      if (cleanNameArray.length === 1) {
        // Search by last name if only a single name submitted
        query = { lastName: nameArray[0] };
      } else {
        // Search by first and last name
        const [firstName, lastName] = cleanNameArray;
        query = { firstName, lastName };
      }

      userList = await User.find(query);
    } else if (userEmail) {
      // Search by email
      userList = await User.find({ email: userEmail });
    }

    results = mapUserListToArray(userList);
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  } finally {
    res.render("users", { title: "Users", results });
  }
};
