const express = require("express");
const debug = require("debug")("api:main");
const cors = require("cors");
const morgan = require("morgan");

const { config } = require("./config");
// const RotuerApi = require("./routes");
// const routerApi = require("./routes");
//
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api", (req, res) => {
	res.send("hello ArroWPass");
});

// routerApi(app);

// middlewares de errores

app.listen(config.port, () => {
	debug(`Server is running on http://localhost:${config.port}`);
});
