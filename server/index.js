const http = require("http");
const router = require("../server/src/service/router");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5000");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  router.lookup(req, res);
});

server.listen(5000, (err) => {
  if (err) throw err;
  console.log("Server listening on: http://localhost:5000");
});
