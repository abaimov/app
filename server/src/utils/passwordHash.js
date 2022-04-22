const bcrypt = require("bcrypt");

const salt = "$2b$10$p5xMP3WTKaZhlPQGVPBNPO";

exports.createPasswordHash = (password) =>
  new Promise((resolve, reject) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) {
        reject(err);
      } else {
        resolve(hash);
      }
    });
  });
