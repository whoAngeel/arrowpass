const { Router } = require("express");
const validatorHandler = require("../middlewares/validator.handler");
const {
	createUserSchema,
	getUserSchema,
	updateUserSchema,
} = require("../schemas/users.schema");

const UserService = require("../services/user.service");
const service = new UserService();

const router = new Router();

router.get("/", async (_req, res, next) => {
	try {
		const users = await service.findAll();
		return res.json(users);
	} catch (error) {
		next(error);
	}
});

router.get("/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		const user = await service.findOne(id);
		return res.json(user);
	} catch (error) {
		next(error);
	}
});

router.post(
	"/",
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

router.patch("/:id", async (req, res, next) => {
	try {
		const data = req.body;
		const { id } = req.params;
		const updatedUser = await service.update(id, data);
		res.json(updatedUser);
	} catch (error) {
		next(error);
	}
});

router.delete("/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		const user = await service.delete(id);
		res.status(200).json(user);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
