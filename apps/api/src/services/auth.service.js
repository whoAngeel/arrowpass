const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const { models } = require("../libs/sequelize");
const UserService = require("./user.service");
const jwt = require("jsonwebtoken");
const { config } = require("../config");
const service = new UserService();

class AuthService {
	constructor() {}
	async getUser(email, password) {
		const user = await service.findByEmail(email);
		if (!user) throw boom.unauthorized();
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) throw boom.unauthorized();
		return user;
	}

	signToken(user) {
		const payload = {
			sub: user.id,
			user,
		};
		const token = jwt.sign(payload, config.secret);
		delete user.dataValues.password;
		return {
			user,
			token,
		};
	}

	sendMail() {}
}

module.exports = AuthService;
