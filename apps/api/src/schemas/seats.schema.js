const joi = require("joi");
const id = joi.number().integer();
const id_autobus = joi.number().integer();
const status = joi.string(); //ocupado, desocupado
const numero = joi.number();
const posicion = joi.string().max(1);// l:left c:center r:right

const createSeatSchema = joi.object({
    id_seat: id.required(),
    id_vehicle: id_autobus.required(),
    status,
    numero:numero.required(), 
    posicion,
});

const updateSeatSchema = joi.object({
    status: status.required(),
    numero,
    posicion
})

const getSeatSchema = joi.object({
    id: id.required()
})

module.exports = {
    createSeatSchema,
    updateSeatSchema,
    getSeatSchema
}