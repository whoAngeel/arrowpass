const joi = require("joi");

const id = joi.number().integer().min(1);
const id_viaje = joi.number().integer();
const id_usuario = joi.number().integer();
const passenger_name = joi.string().min(3);
const status = joi.string(); // emitido, cancelado
const seat_number = joi.string(); //
const price = joi.number().positive().precision(2);
const pay_stub = joi.string(); // folio de pago

const createTicketSchema = joi.object({
	id_viaje: id_viaje.required(),
	id_usuario: id_usuario.required(),
	passenger_name: passenger_name.required(),
	status,
	seat_number: seat_number.required,
	price: price.required(),
	pay_stub,
});

const updateTicketSchema = joi.object({
	id_usuario,
	id_viaje,
	passenger_name,
	status,
	seat_number,
	price,
	pay_stub,
});

const getTickets = joi.object({
	id: id.required(),
});

module.exports = {
	createTicketSchema,
	updateTicketSchema,
	getTickets,
};
