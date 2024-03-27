const joi = require("joi");

const id = joi.number().integer();
const route_name = joi.string().min(3);
const departure_time = joi.string(); // fecha de salida
const arrival_time = joi.string();
const status = joi.string();
const duration = joi.string();
// const ruta /// esto para que?
const id_driver = joi.number().integer();
const id_terminal_start = joi.number().integer();
const id_terminal_end = joi.number().integer();
const id_vehicle = joi.number().integer();

const createJourneySchema = joi.object({
	route_name: route_name.required(),
	departure_time: joi.required(),
	departure_time,
	status: status.required(),
	duration,
	id_driver: id_driver.required(),
	id_terminal_end: id_terminal_end.required(),
	id_terminal_start: id_terminal_start.required(),
	id_vehicle: id_vehicle.required(),
});

const updateJourneySchema = joi.object({
	route_name,
	departure_time,
	arrival_time,
	status,
	duration,
	id_driver,
	id_terminal_end,
	id_terminal_start,
	id_vehicle,
});

const getJourneySchema = joi.object({
	id: id.required(),
});

module.exports = {
	createJourneySchema,
	updateJourneySchema,
	getJourneySchema,
};
