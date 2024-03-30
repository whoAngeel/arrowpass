const { Router } = require("express");
const SeatService = require("../services/seat.service");
const validatorHandler = require("../middlewares/validator.handler");
const {
	createSeatSchema,
	updateSeatSchema,
	getSeatSchema
} = require("../schemas/seats.schema");
const service = new SeatService();

const router = new Router();

router.post("/", validatorHandler(createSeatSchema, "body"),
	async (req, res, next) => {
		try {
			const data = req.body;
			const newSeat = await service.create(data);
			res.status(201).json(newSeat);
		} catch (error) {
			next(error);
		}

	});

router.get("/", async (req, res, next) => {
	try {
		const seats = await service.findAll();
		res.status(200).json(seats); 
	} catch (error) {
		next(error);
	}
})

router.patch("/:id",
	validatorHandler(getSeatSchema, "params"),
	validatorHandler(updateSeatSchema, "body"),
	async(req,res,next) => {
		try {
			const data = req.body; 
			const {id} = req.params;
			const updateSeat = await service.update(id, data);
			res.status(200).json(updateSeat);
		} catch (error) {
			next(error); 
		}
	})

module.exports = router;