const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Games = require("../models/Games");
const Plataforms = require("../models/Plataforms");
const Stores = require("../models/Stores");

const connection = new Sequelize(dbConfig);

Games.init(connection);
Stores.init(connection);
Plataforms.init(connection);

Games.associate(connection.models);
Stores.associate(connection.models);
Plataforms.associate(connection.models);
