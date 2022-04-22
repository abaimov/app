// const validator = require("validator");
const { usersPath } = require("../utils/path");
const { readJSONAsync } = require("../utils/readJSON");
const { writeJSONAsync } = require("../utils/writeJSON");

exports.addNewUser = async (newUser) => {
  const allUsers = await readJSONAsync(usersPath());

  const foundUser = allUsers.find((user) => user.email === newUser.email);

  if (foundUser) {
    return false;
  }
  allUsers.push(newUser);
  await writeJSONAsync(usersPath(), allUsers);
  return true;
};
