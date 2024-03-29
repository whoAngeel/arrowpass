const { Router } = require("express");
const passport = require("passport");
const validatorHandler = require("../middlewares/validator.handler");
const {
	createVehicleSchema,
	updateVehicleSchema,
	getVehicleSchema,
} = require("../schemas/vehicle.schema");

const VehicleService = require("../services/vehicle.service");
const service = new VehicleService();

const router = new Router();

router.get(
	"/",
	passport.authenticate("jwt", { session: false }),
	async (req, res, next) => {
		try {
			const vehicles = await service.findAll();
			res.json(vehicles);
		} catch (error) {
			next(error);
		}
	}
);

router.get(
	"/:id",
	passport.authenticate("jwt", { session: false }),
	validatorHandler(getVehicleSchema, "params"),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const vehicle = await service.findOne(id);
			return res.json(vehicle);
		} catch (error) {
			next(error);
		}
	}
);

router.post(
	"/",
	passport.authenticate("jwt", { session: false }),
	validatorHandler(createVehicleSchema, "body"),
	async (req, res, next) => {
		try {
			const data = req.body;
			const newVehicle = await service.create(data);
			res.status(201).json(newVehicle);
		} catch (error) {
			next(error);
		}
	}
);

router.patch(
	"/:id",
	passport.authenticate("jwt", { session: false }),
	validatorHandler(getVehicleSchema, "params"),
	validatorHandler(updateVehicleSchema, "body"),
	async (req, res, next) => {
		try {
			const data = req.body;
			const { id } = req.params;
			const updateVehicle = await service.update(id, data);
			res.json(updateVehicle);
		} catch (error) {
			next(error);
		}
	}
);

router.delete(
	"/:id",
	passport.authenticate("jwt", { session: false }),
	validatorHandler(getVehicleSchema, "params"),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const vehicle = await service.delete(id);
			res.json(vehicle);
		} catch (error) {
			next(error);
		}
	}
);

module.exports = router;
