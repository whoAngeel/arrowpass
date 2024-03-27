const { Sequelize } = require("sequelize");
const { config } = require("../config");
// const setupModels = require("../db/models");

const USER = encodeURIComponent(config.dbUser);
const PASS = encodeURIComponent(config.dbPass);
const URI = `mysql://${USER}:${PASS}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
	dialect: "mysql",
	logging: true,
});

// setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;
