// const validator = require("validator");
const { usersPath } = require("../utils/path");
const { readJSONAsync } = require("../utils/readJSON");
const { writeJSONAsync } = require("../utils/writeJSON");

exports.addNewUser = async (newUser, res) => {
  const allUsers = await readJSONAsync(usersPath());

  const foundUser = allUsers.find((user) => user.email === newUser.email);

  if (foundUser) {
    res.writeHead(404);
    return { code: 404, message: "User already registered" };
  }
  allUsers.push(newUser);
  await writeJSONAsync(usersPath(), allUsers);
  return { code: 200, message: "user aded" };
};

exports.loginUser = async () => {
  const allUsers = await readJSONAsync(usersPath());

  return allUsers;
};
