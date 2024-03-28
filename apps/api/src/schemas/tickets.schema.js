const joi = require("joi");

const id = joi.number().integer().min(1);
const idViaje = joi.number().integer();
const idUser = joi.number().integer();
const passengerName = joi.string().min(3);
const status = joi.string(); // emitido, cancelado
const seatNumber = joi.string(); //
const price = joi.number().positive().precision(2);
const payStub = joi.string(); // folio de pago

const createTicketSchema = joi.object({
	idViaje: idViaje.required(),
	idUser: idUser.required(),
	passengerName: passengerName.required(),
	status,
	seatNumber: seatNumber.required(),
	price: price.required(),
	payStub,
});

const updateTicketSchema = joi.object({
	idUser,
	idViaje,
	passengerName,
	status,
	seatNumber,
	price,
	payStub,
});

const getTicketSchema = joi.object({
	id: id.required(),
});

module.exports = {
	createTicketSchema,
	updateTicketSchema,
	getTicketSchema,
};
