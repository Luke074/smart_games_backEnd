const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const connecton = new Sequelize(dbConfig);

