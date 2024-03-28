const joi = require("joi");

const id = joi.number().integer().min(1);
const journeyId = joi.number().integer();
const userId = joi.number().integer();
const passengerName = joi.string().min(3);
const status = joi.string(); // emitido, cancelado
const seatNumber = joi.string(); //
const price = joi.number().positive().precision(2);
const type = joi.string();
const payStub = joi.string(); // folio de pago

const createTicketSchema = joi.object({
	journeyId: journeyId.required(),
	userId: userId.required(),
	passengerName: passengerName.required(),
	status,
	type: type.required(),
	seatNumber: seatNumber.required(),
	price: price.required(),
	payStub,
});

const updateTicketSchema = joi.object({
	userId,
	journeyId,
	passengerName,
	type,
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
