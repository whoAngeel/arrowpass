const { Router } = require("express");

const Wallets = require("./wallet.routes");

function routerApi(app) {
	const router = Router();
	app.use("/api", router);

	router.use("/wallet", Wallets);
}

module.exports = routerApi;
