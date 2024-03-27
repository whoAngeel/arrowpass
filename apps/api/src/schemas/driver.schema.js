const joi = require("joi");

const id = joi.number().integer();
const nombre = joi.string().min(3);
const telefono = joi.number().integer().max(15);
const nomina = joi.string();

const createDriverSchema = joi.object({
    nombre: nombre.required(),
    telefono,
    nomina: nomina.required(),
});

const updateDriverSchema = joi.object({
    nombre,
    telefono,
    nomina
})

const getDriverSchema = joi.object({
    id: id.required()
})

module.exports = {
    createDriverSchema, 
    updateDriverSchema,
    getDriverSchema
}