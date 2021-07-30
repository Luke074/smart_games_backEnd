const express = require("express");

const storeController = require("./controllers/store");
const plataformController = require("./controllers/plataform");
const gameController = require("./controllers/game");

const routes = express.Router();

routes.get("/stores", storeController.index);
routes.get("/stores/:id", storeController.find);

routes.get("/plataforms", plataformController.index);
routes.get("/plataforms/:id", plataformController.find);

routes.get("/games", gameController.index);
routes.get("/games/:id", gameController.find);

module.exports = routes;