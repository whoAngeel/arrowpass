const { Router } = require("express");
const Demo = require("../services/googlewallet.service");
const GoogleWalletService = require("../services/google.wallet.service");
const EmailService = require("../services/email.service");
const service = new Demo();
const emailService = new EmailService();
const router = new Router();

/**
 * Generate a flow ticket.
 *
 * 1.- Create de Wallet Ticket
 * 2.- Send by gmail
 */
router.post("/generate", async (req, res, next) => {
	// const service = new Demo();
	console.log("Hola mundo");

	try {
		await service.createClass(req.body);
		await service.createObject(req.body);
		response = await service.createJwtNewObjects();
		res.json({ message: "Class created successfully", button: response });
	} catch (error) {
		next(error);
	}
});

router.post("/send-google-ticket", async (req, res, next) => {
	try {
		await service.createClass(req.body);
		await service.createObject(req.body);
		const ticketBody = req.body;
		const linkWToken = await service.createJwtNewObjects();
		// const passenger = "angel";
		const rta = await emailService.sendGMailTicket(ticketBody, linkWToken);
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
