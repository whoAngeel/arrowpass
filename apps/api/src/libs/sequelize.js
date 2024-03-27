const { Sequelize } = require("sequelize");
const { config } = require("../config");
const setupModels = require("../db/models");

const USER = encodeURIComponent(config.dbUser);
const PASS = encodeURIComponent(config.dbPass);
const URI = `mysql://${USER}:${PASS}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
	dialect: "mysql",
	logging: false,
});
sequelize
	.authenticate()
	.then(() => {
		console.log("successful database connection");
	})
	.catch((err) => {
		console.error("error connecting to database:", err);
	});

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;
