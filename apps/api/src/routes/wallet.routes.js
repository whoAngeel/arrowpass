const { Router } = require("express");
const Demo = require("../services/googlewallet.service");
const EmailService = require("../services/email.service");
const generateAppleTicket = require("../services/appleWallet.service");
const service = new Demo();
const emailService = new EmailService();
const router = new Router();

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
		const { organization, ticket, passengerEmail } = req.body;

		const fileName = await generateAppleTicket(organization, ticket);

		const rta = await emailService.sendAppleTicket(
			passengerEmail,
			"./" + fileName
		);
		return res.status(200).json(rta);
	} catch (error) {
		next(error);
	}
});
module.exports = router;
