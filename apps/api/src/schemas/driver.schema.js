const joi = require("joi");

const id = joi.number().integer();
const fullname = joi.string().min(3);
const phone = joi.string().min(10).max(15);
const address = joi.string();
const nomina = joi.string();

const createDriverSchema = joi.object({
	fullname: fullname.required(),
	phone,
	address,
	nomina: nomina.required(),
});

const updateDriverSchema = joi.object({
	fullname,
	phone,
	address,
	nomina,
});

const getDriverSchema = joi.object({
	id: id.required(),
});

module.exports = {
	createDriverSchema,
	updateDriverSchema,
	getDriverSchema,
};
