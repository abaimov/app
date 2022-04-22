const path = require("path");
exports.clientPath = () => {
  const str = process.cwd();
  const newStr = str.replace("server", "client");

  return newStr;
};

exports.usersPath = () => {
  const str = path.resolve(process.cwd(), "src/service/users.json");
  return str;
};
