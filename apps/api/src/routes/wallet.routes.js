const { Router } = require("express");
const GoogleWalletService = require("../services/google.wallet.service");

const router = new Router();
const service = new GoogleWalletService();

router.post("/google", async (req, res, next) => {
	try {
		const { email, ticketData } = req.body;
		await service.createPassClass();
		const button = await service.createPassObject(email, ticketData);
		res.send({
			passClass,
			button,
		});
	} catch (error) {
		next(error);
	}
});

module.exports = router;
