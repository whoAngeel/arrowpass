const { Router } = require("express");
const TicketService = require("../services/ticket.service");
const validatorHandler = require("../middlewares/validator.handler");
const {
	getTicketSchema,
	createTicketSchema,
	updateTicketSchema,
} = require("../schemas/tickets.schema");
const service = new TicketService();

const router = new Router();
router.get("/", async (req, res, next) => {
	try {
		const tickets = await service.findAll();
		res.status(200).json(tickets);
	} catch (error) {
		next(error);
	}
});

router.get(
	"/:id",
	validatorHandler(getTicketSchema, "params"),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const ticket = await service.findOne(id);
			res.status(200).json(ticket);
		} catch (error) {
			next(error);
		}
	}
);

router.post(
	"/",
	validatorHandler(createTicketSchema, "body"),
	async (req, res, next) => {
		try {
			const body = req.body;
			const newTicket = await service.create(body);
			res.status(201).json(newTicket);
		} catch (error) {
			next(error);
		}
	}
);

router.patch(
	"/:id",
	validatorHandler(getTicketSchema, "params"),
	validatorHandler(updateTicketSchema, "body"),
	async (req, res, next) => {
		try {
			const data = req.body;
			const { id } = req.params;
			const ticket = await service.update(id, data);
			res.status(200).json(ticket);
		} catch (error) {
			next(error);
		}
	}
);

router.delete(
	"/:id",
	validatorHandler(getTicketSchema, "params"),
	async function (req, res, next) {
		try {
			const { id } = req.params;
			const deleted = await service.delete(id);
			res.status(200).json(deleted);
		} catch (error) {
			next(error);
		}
	}
);

module.exports = router;
