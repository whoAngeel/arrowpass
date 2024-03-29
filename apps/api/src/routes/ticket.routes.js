const { Router } = require("express");

const TicketService = require("../services/ticket.service");
const validatorHandler = require("../middlewares/validator.handler");
const { getTicketSchema } = require("../schemas/ticket.schema");
const passport = require("passport");
const service = new TicketService();

const router = new Router();

router.get(
	"/:id",
	passport.authenticate("jwt", { session: false }),
	validatorHandler(getTicketSchema, "params"),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const ticket = await service.findOne(id);
			return res.json(ticket);
		} catch (error) {
			next(error);
		}
	}
);

module.exports = router;
