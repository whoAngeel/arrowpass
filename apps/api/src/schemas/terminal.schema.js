const joi = require("joi");
const id = joi.number().integer();
const name = joi.string().min(3);
const phone = joi.string().min(10).max(10);
const email = joi.string().email();
const address = joi.string();
const coords = joi.object({
	latitude: joi.number(),
	longitude: joi.number(),
});

const createTerminalSchema = joi.object({
	name: name.required(),
	phone,
	email,
	address: address.required(),
	coords,
});

const updateTerminalSchema = joi.object({
	name,
	phone,
	email,
	address,
	coords,
});

const getTerminalSchema = joi.object({
	id: id.required(),
});

module.exports = {
	getTerminalSchema,
	updateTerminalSchema,
	createTerminalSchema,
};
