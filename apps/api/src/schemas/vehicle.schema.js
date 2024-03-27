const joi = require("joi"); 
const id = joi.number().integer().min(1);
const placas = joi.string();
const validType = ["economico", "business","firsclass"];
const type = joi.string().min(5).valid(...validType);

const createVehicleSchema = joi.object({
    placas: placas.required(),
    type,
}); 

const updateVehicleSchema = joi.object({
    placas,
    type,
})

const getVehicleSchema = joi.object({
    id: id.required(),
})

module.exports = {
    createVehicleSchema,
    updateVehicleSchema,
    getVehicleSchema
}