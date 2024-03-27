const express = require("express");
const debug = require("debug")("api:main");
const cors = require("cors");
const morgan = require("morgan");

const { config } = require("./config");
const routerApi = require("./routes");
const {
	logErrors,
	boomErrorHandler,
	errorHandler,
	ormErrorHandler,
} = require("./middlewares/error.handler");
const sequelize = require("./libs/sequelize");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
	res.send("hello ArroWPass");
});

routerApi(app);

// middlewares de errores
app.use(logErrors);
app.use(boomErrorHandler);
app.use(ormErrorHandler);
app.use(errorHandler);

app.set("sequelize", sequelize);

app.listen(config.port, () => {
	debug(`Server is running on http://localhost:${config.port}`);
	// const URI = `mysql://${config.dbUser}:${config.dbPass}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
	// console.log(URI);
});
