const joi = require("joi");

const message = joi.object({
	subject: joi.string(),
	text: joi.string(),
	html: joi.string(),
});

module.exports = {
	message,
};
