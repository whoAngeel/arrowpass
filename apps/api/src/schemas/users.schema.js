const joi = require("joi");
const validRoles = ["admin", "dev", "passenger"];

const id = joi.number().integer().min(1);
const firstname = joi.string().min(3);
const lastname = joi.string().min(3);
const email = joi.string().email();
const password = joi.string();
const phone = joi.string();
const birthdate = joi.string();
const role = joi
	.string()
	.min(3)
	.max(16)
	.valid(...validRoles);

const createUserSchema = joi.object({
	firstname: firstname.required(),
	lastname: lastname,
	email: email.required(),
	password: password.required(),
	phone,
	role: role.required(),
	birthdate,
});

const updateUserSchema = joi.object({
	firstname,
	lastname,
	email,
	password,
	phone,
	birthdate,
	role,
});
const registerUserSchema = joi.object({
	firstname: firstname.required(),
	lastname,
	email: email.required(),
	role,
	phone,
	birthdate,
	password: password.required(),
});
const getUserSchema = joi.object({
	id: id.required(),
});

module.exports = {
	createUserSchema,
	updateUserSchema,
	getUserSchema,
	registerUserSchema,
};
