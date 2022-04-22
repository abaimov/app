const http = require("http");
const router = require("../server/src/service/router");

const server = http.createServer((req, res) => {
  router.lookup(req, res);
});

server.listen(5000, (err) => {
  if (err) throw err;
  console.log("Server listening on: http://localhost:5000");
});
