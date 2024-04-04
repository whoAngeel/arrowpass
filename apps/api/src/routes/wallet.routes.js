const { Router } = require("express");
const GoogleWalletService = require("../services/google.wallet.service");
const EmailService = require("../services/email.service");
const router = new Router();
const service = new GoogleWalletService();
const emailService = new EmailService();

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

router.post("/send-google-ticket", async (req, res, next) => {
	try {
		const { email } = req.body;
		const walletToken = "token"; // TODO: pasar el token para el url
		const passenger = "angel";
		const rta = await emailService.sendGMailTicket(
			email,
			passenger,
			walletToken
		);
		res.status(200).json(rta);
	} catch (error) {
		next(error);
	}
});

router.post("/send-apple-ticket", async (req, res, next) => {
	try {
		const pathFile = { path: "objectpath" };
		const rta = await emailService.sendAppleTicket("email", pathFile);
		return res.status(200).json(rta);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
