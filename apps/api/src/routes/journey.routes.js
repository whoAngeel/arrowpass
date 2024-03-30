const { Router } = require("express");

const router = new Router();

const JourneyService = require("../services/journey.service");
const validatorHandler = require("../middlewares/validator.handler");
const {
	getJourneySchema,
	createJourneySchema,
	updateJourneySchema,
	reservationJourneySchema,
} = require("../schemas/journey.schema");
const passport = require("passport");
const { checkRoles } = require("../middlewares/auth.handler");
const service = new JourneyService();

router.get(
	"/",
	passport.authenticate("jwt", { session: false }),
	checkRoles("admin", "passenger"),
	async (req, res, next) => {
		try {
			let journeys = await service.findAll();
			res.json(journeys);
		} catch (error) {
			next(error);
		}
	}
);

router.get(
	"/:id",
	passport.authenticate("jwt", { session: false }),
	checkRoles("admin", "passenger"),
	validatorHandler(getJourneySchema, "params"),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const journey = await service.findOne(id);
			return res.json(journey);
		} catch (error) {
			next(error);
		}
	}
);

router.get(
	"/:id/seats",
	passport.authenticate("jwt", { session: false }),
	checkRoles("admin", "passenger"),
	validatorHandler(getJourneySchema, "params"),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const journey = await service.getSeats(id);
			return res.json(journey);
		} catch (error) {
			next(error);
		}
	}
);

router.get(
	"/:id/all",
	passport.authenticate("jwt", { session: false }),
	checkRoles("admin", "passenger"),
	validatorHandler(getJourneySchema, "params"),
	async (req, res, next) => {
		try {
			const { id } = req.params;
			const journey = await service.findOneWithRelations(id);
			return res.json(journey);
		} catch (error) {
			next(error);
		}
	}
);

router.post(
	"/",
	passport.authenticate("jwt", { session: false }),
	checkRoles("admin"),
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

router.post(
	"/:id/reservation",
	passport.authenticate("jwt", { session: false }),
	checkRoles("admin", "passenger"),
	validatorHandler(getJourneySchema, "params"),
	validatorHandler(reservationJourneySchema, "body"),
	async (req, res, next) => {
		try {
			const data = req.body;
			const { id } = req.params;
			const reservation = await service.reservation(id, data);

			res.json(reservation);
		} catch (error) {
			next(error);
		}
	}
);

router.patch(
	"/:id",
	passport.authenticate("jwt", { session: false }),
	checkRoles("admin", "passenger"),
	validatorHandler(getJourneySchema, "params"),
	validatorHandler(updateJourneySchema, "body"),
	async (req, res, next) => {
		try {
			const data = req.body;
			const { id } = req.params;
			const updatedJourney = await service.update(id, data);
			res.json(updatedJourney);
		} catch (error) {
			next(error);
		}
	}
);

router.delete(
	"/:id",
	passport.authenticate("jwt", { session: false }),
	checkRoles("admin"),
	validatorHandler(getJourneySchema, "params"),
	async function (req, res, next) {
		try {
			const { id } = req.params;
			const deletedJourney = await service.delete(id);
			res.json(deletedJourney);
		} catch (error) {
			next(error);
		}
	}
);

router.patch(
	"/:id/start",
	passport.authenticate("jwt", { session: false }),
	checkRoles("admin", "driver"),
	validatorHandler(getJourneySchema, "params"),
	async (req, res, next) => {
		try {
			const { id } = req;
			const { startDate } = req.body;
			const updatedJourney = await service.setStart(id, startDate);
			if (updatedJourney) res.status(200).json(updatedJourney);
			else
				res.status(404).json({
					message: "Journey Not Found",
				});
		} catch (error) {
			next(error);
		}
	}
);
router.patch("/:id/end");
module.exports = router;
