const joi = require("joi");
const validRoles = ["admin", "dev"];

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
  birthdate,
  role: role.required(),
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

const getUserSchema = joi.object({
  id: id.required(),
});

module.exports = {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
};
