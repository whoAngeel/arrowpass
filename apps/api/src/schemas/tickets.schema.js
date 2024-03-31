const joi = require("joi");

const id = joi.number().integer().min(1);
const journeyId = joi.number().integer();
const userId = joi.number().integer();
const seatId = joi.number().integer();
const status = joi.string(); // emitido, cancelado
const price = joi.number().positive().precision(2);
const reservationDate = joi.date();
const type = joi.string();
const payStub = joi.string(); // folio de pago
const passengerName = joi.string();

const createTicketSchema = joi.object({
  journeyId: journeyId.required(),
  userId: userId.required(),
  passengerName: passengerName.required(),
  status,
  type: type.required(),
  seatId: seatId.required(),
  price: price.required(),
  payStub,
  reservationDate,
});

const updateTicketSchema = joi.object({
  userId,
  journeyId,
  passengerName,
  type,
  status,
  seatId: seatId,
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
