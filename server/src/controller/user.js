const { v4: uuidv4 } = require("uuid");
const { parseJsonBody } = require("../utils/parseReqBody");
const { createPasswordHash } = require("../utils/passwordHash");
const { userVerification } = require("../utils/userVerification");
const userModel = require("../model/user");

exports.addNewUser = async (req, res) => {
  const newUserBody = await parseJsonBody(req);

  const newUser = {
    id: uuidv4(),
    name: newUserBody.name,
    lastname: newUserBody.lastname,
    bithday: new Date(newUserBody["date-picker"]).toLocaleDateString("ru-RU"),
    email: newUserBody.email,
    password: await createPasswordHash(newUserBody.password),
    role: "USER",
    activationLink: uuidv4(),
  };

  return userModel.addNewUser(newUser, res);
};

exports.loginUser = async (req, res) => {
  const candidate = await parseJsonBody(req);

  const allUsers = await userModel.loginUser();

  return await userVerification(candidate, allUsers, res);
};
