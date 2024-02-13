//get connection
const { Book, User } = require("../dbConnection.js");
//get utility functions
const { mapBookListToArray } = require("../util.js");

module.exports = async (req, res, next) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);

    res.render("confirm-delete-user", {
      title: "Delete User",
      data: {
        id: id,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });
  } catch (error) {
    console.log(`Something went wrong: ${error}`);
  }
};
