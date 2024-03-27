const joi = require("joi");

const id = joi.number().integer();
const name = joi.string().min(3);
const description = joi.string().min(1);

const createTypeVehicleSchema = joi.object({
	name: name.required(),
	description,
});

const updateTypeVehicleSchema = joi.object({
	name,
	description,
});

const getTypeVehicleSchema = joi.object({
	id: id.required(),
});
module.exports = {
	createTypeVehicleSchema,
	updateTypeVehicleSchema,
	getTypeVehicleSchema,
};
