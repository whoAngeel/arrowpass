const joi = require("joi");
const id = joi.number().integer().min(1);
const plates = joi.string();
const validType = ["economico", "business", "firstclass"];
const type = joi.string().valid(...validType);
const model = joi.string();
const brand = joi.string();
const color = joi.string();
const capacity = joi.number().integer().positive();
const details = joi.string();

const createVehicleSchema = joi.object({
  plates: plates.required(),
  type: type.required(),
  model,
  brand,
  color,
  capacity: capacity.required(), /// capacidad
  details,
});

const updateVehicleSchema = joi.object({
  plates,
  type,
  model,
  brand,
  color,
  capacity,
  details,
});

const getVehicleSchema = joi.object({
  id: id.required(),
});

module.exports = {
  createVehicleSchema,
  updateVehicleSchema,
  getVehicleSchema,
};
