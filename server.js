const express = require("express")();
const next = require("next");
const SocketIO = require('socket.io');
const http = require('http').createServer(express);

const dev = process.env.NODE_ENV !== 'production';
const port = 4000;
const app = next({ dev, port });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const expressServer = express();
  const httpServer = server.createServer(expressServer);
  const io = SocketIO(httpServer);

  expressServer.get("/deadcall", (req, res) => {
    res.send("deadcall");
  });

  expressServer.all("*", (req, res) => handle(req, res));

  expressServer.listen(port, (err) => console.log(`Server listening : http://localhost:${port}`));
});
