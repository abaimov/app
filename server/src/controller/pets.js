const petsModel = require("../model/pets");

exports.getAllImagesArr = () => {
  return petsModel.getAllPetsArrModel();
};
