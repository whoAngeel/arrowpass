const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const { models } = require("../libs/sequelize");
const UserService = require("./user.service");
const jwt = require("jsonwebtoken");
const { config } = require("../config");
const service = new UserService();
const nodemailer = require("nodemailer");

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
	async findUser(email) {
		const user = await service.findByEmail(email);
		if (!user) throw boom.notFound();
		return user;
	}

	async sendMail(email, messageData) {
		const user = await this.findUser(email);
		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				user: config.mail,
				pass: config.mailPass,
			},
		});

		await transporter.sendMail({
			from: `${config.mail}`,
			to: `${user.email}`,
			subject: messageData.subject,
			text: messageData.text,
			html: messageData.html,
		});
		return {
			message: "email sent",
		};
	}
}

module.exports = AuthService;
