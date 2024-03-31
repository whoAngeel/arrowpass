const { Router } = require("express");

const TerminalService = require("../services/terminal.service");
const validatorHandler = require("../middlewares/validator.handler");
const {
	getTerminalSchema,
	createTerminalSchema,
	updateTerminalSchema,
} = require("../schemas/terminal.schema");
const passport = require("passport");
const { checkRoles } = require("../middlewares/auth.handler");
const service = new TerminalService();

const router = new Router();

router.get(
	"/",
	passport.authenticate("jwt", { session: false }),
	checkRoles("admin", "passenger"),
	async (req, res, next) => {
		try {
			const terminals = await service.findAll();
			res.json(terminals);
		} catch (error) {
			next(error);
		}
	}
);

router.get(
	"/:id",
	passport.authenticate("jwt", { session: false }),
	checkRoles("admin", "passenger"),
	validatorHandler(getTerminalSchema, "params"),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const terminal = await service.findOne(id);
			return res.json(terminal);
		} catch (error) {
			next(error);
		}
	}
);

router.post(
	"/",
	passport.authenticate("jwt", { session: false }),
	checkRoles("admin"),
	validatorHandler(createTerminalSchema, "body"),
	async (req, res, next) => {
		try {
			const data = req.body;
			const newTerminal = await service.create(data);
			res.status(201).json(newTerminal);
		} catch (error) {
			next(error);
		}
	}
);

router.patch(
	"/:id",
	passport.authenticate("jwt", { session: false }),
	checkRoles("admin"),
	validatorHandler(getTerminalSchema, "params"),
	validatorHandler(updateTerminalSchema, "body"),
	async (req, res, next) => {
		try {
			const data = req.body;
			const { id } = req.params;
			const updatedTerminal = await service.update(id, data);
			res.json(updatedTerminal);
		} catch (error) {
			next(error);
		}
	}
);

router.delete(
	"/:id",
	passport.authenticate("jwt", { session: false }),
	checkRoles("admin"),
	validatorHandler(getTerminalSchema, "params"),
	async function (req, res, next) {
		try {
			const { id } = req.params;
			const deletedTerminal = await service.delete(id);
			res.json(deletedTerminal);
		} catch (error) {
			next(error);
		}
	}
);

module.exports = router;
