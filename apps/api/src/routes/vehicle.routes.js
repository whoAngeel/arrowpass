const { Router } = require("express");
const validatorHandler = require("../middlewares/validator.handler");
const {
	createVehicleSchema,
	updateVehicleSchema,
	getVehicleSchema
} = require("../schemas/vehicle.schema");

const VehicleService = require("../services/vehicle.service");
const service = new VehicleService();

const router = new Router();

router.get("/", async (req, res, next) => {
	try {
		const vehicles = await service.findAll();
		res.status(200).json(vehicles);
	} catch (error) {
		next(error);
	}
});

router.get("/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		const vehicle = await service.findOne(id);
		return res.status(200).json(vehicle);
	} catch (error) {
		next(error);
	}
});
router.post("/", validatorHandler(createVehicleSchema, "body"),
	async (req, res, next) => {
		try {
			const data = req.body;
			const newVehicle = await service.create(data);
			res.status(201).json(newVehicle);
		} catch (error) {
			next(error);
		}
	});

router.patch("/:id", validatorHandler(getVehicleSchema, "params"),
	validatorHandler(createVehicleSchema, "body"),
	async (req, res, next) => {
		try {
			const data = req.body;
			const { id } = req.params;
			const updateVehicle = await service.update(id, data);
			res.status(200).json(updateVehicle);
		} catch (error) {
			next(error);
		}
	});

router.delete("/:id", validatorHandler(getVehicleSchema, "params"),
	function (req, res, next) {
		try {
			const { id } = req.params;
			res.status(200).json(id);
		} catch (error) {
			next(error);
		}
	});

module.exports = router;
