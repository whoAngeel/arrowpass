const joi = require("joi");
const id = joi.number().integer();
const vehicleId = joi.number().integer();
const status = joi.string(); //ocupado, desocupado
const number = joi.number().positive();
const position = joi.string(); // l:left c:center r:right

const createSeatSchema = joi.object({
	idSeat: id.required(),
	vehicleId: vehicleId.required(),
	status,
	number: number.required(),
	position,
});

const updateSeatSchema = joi.object({
	status: status.required(),
	// vehicleId,
	number,
	position,
});

const getSeatSchema = joi.object({
	id: id.required(),
});

module.exports = {
	createSeatSchema,
	updateSeatSchema,
	getSeatSchema,
};
