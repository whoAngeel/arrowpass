const joi = require("joi");
const id = joi.number().integer();
const vehicleId = joi.number().integer();
const status = joi.string(); //ocupado, desocupado
const number = joi.number().integer().positive();
const position = joi.string(); // l:left c:center r:right

const createSeatSchema = joi.object({
  vehicleId: vehicleId.required(),
  number: number.required(),
  status: status.required(),
  position,
});

const updateSeatSchema = joi.object({
  status: status.required()
});

const getSeatSchema = joi.object({
  id: id.required(),
});

module.exports = {
  createSeatSchema,
  updateSeatSchema,
  getSeatSchema,
};
