const { Router } = require("express");

const router = new Router();

const JourneyService = require("../services/journey.service");
const validatorHandler = require("../middlewares/validator.handler");
const {
	getJourneySchema,
	createJourneySchema,
	updateJourneySchema,
} = require("../schemas/journey.schema");
const service = new JourneyService();

router.get("/", async (req, res, next) => {
	try {
		let journeys = await service.findAll();
		res.status(200).json(journeys);
	} catch (error) {
		next(error);
	}
});

router.get(
	"/:id",
	validatorHandler(getJourneySchema, "params"),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const journey = await service.findOne(id);
			return res.status(200).json(journey);
		} catch (error) {
			next(error);
		}
	}
);

router.post(
	"/",
	validatorHandler(createJourneySchema, "body"),
	async (req, res, next) => {
		try {
			const body = req.body;
			const newJourney = await service.create(body);
			res.status(201).json(newJourney);
		} catch (error) {
			next(error);
		}
	}
);

router.patch(
	"/:id",
	validatorHandler(getJourneySchema, "params"),
	validatorHandler(updateJourneySchema, "body"),
	async (req, res, next) => {
		try {
			const data = req.body;
			const { id } = req.params;
			const updatedJourney = await service.update(id, data);

			res.status(200).json(updatedJourney);
		} catch (error) {
			next(error);
		}
	}
);

router.delete(
	"/:id",
	validatorHandler(getJourneySchema, "params"),
	async function (req, res, next) {
		try {
			const { id } = req.params;
			const deletedJourney = await service.delete(id);
			res.status(200).json(deletedJourney);
		} catch (error) {
			next(error);
		}
	}
);

module.exports = router;
