const joi = require("joi");

const id = joi.number().integer();
const routeName = joi.string().min(3);
const departureTime = joi.string(); // fecha de salida
const arrivalTime = joi.string();
const status = joi.string();
const duration = joi.string();
// const ruta /// esto para que? => Era para despues para saber si el carro se desvia de la ruta
const driverId = joi.number().integer();
const terminalStartId = joi.number().integer();
const terminalEndId = joi.number().integer();
const vehicleId = joi.number().integer();

const createJourneySchema = joi.object({
	routeName: routeName.required(),
	departureTime: joi.required(),
	arrivalTime,
	status: status.required(),
	duration,
	driverId: driverId.required(),
	terminalEndId: terminalEndId.required(),
	terminalStartId: terminalStartId.required(),
	vehicleId: vehicleId.required(),
});

const updateJourneySchema = joi.object({
	routeName,
	departureTime,
	arrivalTime,
	status,
	duration,
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
};
