const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const session = require("express-session");
const passport = require("passport");
const setTZ = require("set-tz");
setTZ("America/Mexico_City");
// console.log(new Date());

const { config } = require("./config");
const routerApi = require("./routes");
const {
	logErrors,
	boomErrorHandler,
	errorHandler,
	ormErrorHandler,
} = require("./middlewares/error.handler");

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
app.use(express.static("public"));
app.use(express.static("passes"));
app.use(express.static("apple-wallet"));

app.listen(config.port, () => {
	console.log(`Server is running on http://localhost:${config.port}`);
});
