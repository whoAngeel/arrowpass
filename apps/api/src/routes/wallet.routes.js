const { Router } = require("express");
const GoogleWalletService = require("../services/google.wallet.service");
const Demo = require("../services/googlewallet.service");

const router = new Router();

/**
 * Generate a flow ticket.
 *
 * 1.- Create de Wallet Ticket
 * 2.- Send by gmail
 */
router.post("/generate", async (req, res, next) => {
	const service = new Demo();
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

/**
 * Enviar Notificaciones
 */

module.exports = router;
