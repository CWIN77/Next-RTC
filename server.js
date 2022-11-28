const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== 'production';
const port = 4000;
const app = next({ dev, port });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/getRequest", (req, res) => {
    console.log("hello");
    res.send("getRequest");
  });

  server.all("*", (req, res) => handle(req, res));

  server.listen(port, (err) => console.log(`Server listening : http://localhost:${port}`));
});
