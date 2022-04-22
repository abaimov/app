const router = require("find-my-way")();
const multer = require("multer");
const controllerPets = require("../controller/pets");
const controllerUser = require("../controller/user");
const { statusCode } = require("../utils/statusCode");

const upload = multer({ dest: "uploads/" });

router.on("GET", "/", (req, res, params) => {
  statusCode(200, res);

  res.end(
    JSON.stringify({
      message: "hello full-stack",
      client: "react",
    })
  );
});

router.on("GET", "/pets/images/", (req, res, params) => {
  statusCode(200, res);
  const result = controllerPets.getAllImagesArr();
  res.end(JSON.stringify(result));
});

router.on("POST", "/register", async (req, res) => {
  statusCode(200, res);
  const result = await controllerUser.addNewUser(req, res);
  res.end(JSON.stringify(result));
});

router.on("POST", "/upload", async (req, res) => {
  statusCode(200, res);
  // const result = await controllerUser.addNewUser(req, res);
  res.end(JSON.stringify({ message: "ok" }));
});

// router.on("POST", "/user", async (req, res) => {
//   statusCode(200, res);
//   const result = await controllerUser.addNewUser(req, res);
//   res.end(JSON.stringify(result));
// });

module.exports = router;
