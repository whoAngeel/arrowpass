const { Router } = require("express");
const validatorHandler = require("../middlewares/validator.handler");
const {
	createUserSchema,
	getUserSchema,
	updateUserSchema,
} = require("../schemas/users.schema");

const UserService = require("../services/user.service");
const passport = require("passport");
const service = new UserService();

const router = new Router();

router.get(
	"/",
	passport.authenticate("jwt", { session: false }),
	async (_req, res, next) => {
		try {
			const users = await service.findAll();
			return res.json(users);
		} catch (error) {
			next(error);
		}
	}
);

router.get(
	"/:id",
	passport.authenticate("jwt", { session: false }),
	validatorHandler(getUserSchema, "params"),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const user = await service.findOne(id);
			return res.json(user);
		} catch (error) {
			next(error);
		}
	}
);

router.get(
	"/:id/tickets",
	passport.authenticate("jwt", { session: false }),
	validatorHandler(getUserSchema, "params"),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const user = await service.findOneWithTickets(id);
			return res.json(user);
		} catch (error) {
			next(error);
		}
	}
);

router.post(
	"/",
	passport.authenticate("jwt", { session: false }),
	validatorHandler(createUserSchema, "body"),
	async (req, res, next) => {
		try {
			const data = req.body;
			const newUser = await service.create(data);
			res.status(201).json(newUser);
		} catch (error) {
			next(error);
		}
	}
);

router.patch(
	"/:id",
	passport.authenticate("jwt", { session: false }),
	validatorHandler(getUserSchema, "params"),
	validatorHandler(updateUserSchema, "body"),
	async (req, res, next) => {
		try {
			const data = req.body;
			const { id } = req.params;
			const updatedUser = await service.update(id, data);
			res.json(updatedUser);
		} catch (error) {
			next(error);
		}
	}
);

router.delete(
	"/:id",
	passport.authenticate("jwt", { session: false }),
	validatorHandler(getUserSchema, "params"),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const user = await service.delete(id);
			res.json(user);
		} catch (error) {
			next(error);
		}
	}
);

module.exports = router;
