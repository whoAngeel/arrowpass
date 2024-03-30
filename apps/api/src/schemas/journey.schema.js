const joi = require("joi");

const id = joi.number().integer();
const name = joi.string().min(3);
const departureDate = joi.date();
const arrivalDate = joi.date();
const status = joi.string();
const duration = joi.string();
const ticketPrice = joi.number().positive().precision(2);
const driverId = joi.number().integer();
const terminalStartId = joi.number().integer();
const terminalEndId = joi.number().integer();
const vehicleId = joi.number().integer();

const createJourneySchema = joi.object({
	name: name.required(),
	departureDate: departureDate.required(), // hora de salida
	arrivalDate: arrivalDate.required(), // hora de llegada
	duration: duration.required(),
	ticketPrice: ticketPrice.required(),
	driverId: driverId.required(),
	terminalEndId: terminalEndId.required(),
	terminalStartId: terminalStartId.required(),
	vehicleId: vehicleId.required(),
});

const reservationJourneySchema = joi.object({
	userId: id.required(),
	payment: joi.object({
		amount: joi.number().positive().precision(2).required(),
		method: joi.string().required(),
	}),
	tickets: joi.array().items(
		joi.object({
			seatId: joi.number().integer().required(),
			userId: joi.number().integer().required(),
			price: joi.number().positive().precision(2).required(),
			type: joi.string().required(),
		})
	),
});

const updateJourneySchema = joi.object({
	name,
	departureDate,
	arrivalDate,
	status,
	duration,
	ticketPrice,
	driverId,
	terminalEndId,
	terminalStartId,
	vehicleId,
});

const getJourneySchema = joi.object({
	id: id.required(),
});

module.exports = {
	createJourneySchema,
	updateJourneySchema,
	getJourneySchema,
	reservationJourneySchema,
};
