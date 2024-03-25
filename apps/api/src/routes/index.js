const { Router } = require("express");
const UserRouter = require("./users.routes");

const router = Router();

function routerApi(app) {
	const router = Router();
	app.use("/api", router);
	router.use("/users", UserRouter);
}

module.exports = routerApi;
