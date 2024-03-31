const joi = require("joi");
const id = joi.number().integer();

const getTicketSchema = joi.object({
  id: id.required(),
});

module.exports = {
  getTicketSchema,
};
