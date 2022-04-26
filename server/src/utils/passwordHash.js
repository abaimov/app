const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;

exports.createPasswordHash = (password) => {
  const salt = bcrypt.genSaltSync(saltRounds);

  const hash = bcrypt.hashSync(password, salt);
  console.log("hash", hash);
  return hash;
};

exports.comparePasswordLogin = (password, hash) => {
  const valid = bcrypt.compareSync(password, hash);

  return valid;
};
