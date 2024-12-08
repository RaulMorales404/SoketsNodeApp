const express = require("express");
const cors = require("cors");
const {soketControllers} = require('./../sokets/controllers')
class Server {
  constructor() {
    this.app = express();
    this.server = require("http").createServer(this.app);
    this.port = process.env.PORT;
    this.paths = {};
    this.routesConfig = {};
    this.io = require("socket.io")(this.server);
    this.middleware();
    this.routes();
    //sokets
    this.sokets();
  }

  middleware() {
    ///letura y parceo del body
    this.app.use(cors());
    this.app.use(express.static("public"));
  }

  routes() {}

  sokets() {
    this.io.on("connection", soketControllers );
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log("server", this.port);
    });
  }
}

module.exports = Server;
