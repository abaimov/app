const router = require("find-my-way")();
const controllerPets = require("../controller/pets");
const controllerUser = require("../controller/user");

router.on("GET", "/pets/images/", (req, res) => {
  const result = controllerPets.getAllImagesArr();
  res.end(JSON.stringify(result));
});

router.on("POST", "/registration", async (req, res) => {
  const result = await controllerUser.addNewUser(req, res);
  res.end(JSON.stringify(result));
});

router.on("POST", "/login", async (req, res) => {
  res.writeHead("200", headers);
  const result = await controllerUser.loginUser(req, res);
  res.end(JSON.stringify(result));
});

// router.on("POST", "/upload", async (req, res) => {

//   // const result = await controllerUser.addNewUser(req, res);
//   res.end(JSON.stringify({ message: "ok" }));
// });

module.exports = router;
