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
		delete user.dataValues.recoveryToken;
		return user;
	}

	signToken(user) {
		const payload = {
			sub: user.id,
			user,
		};
		const token = jwt.sign(payload, config.secret);
		delete user.dataValues.password;
		delete user.dataValues.recoveryToken;
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

	async sendRecovery(email) {
		const user = await this.findUser(email);
		const payload = { sub: user.id };
		const token = jwt.sign(payload, config.secretRecovery, {
			expiresIn: "15min",
		});
		const link = `http://localhost:5173/recovery/reset-password?token=${token}`;
		await service.update(user.id, {
			recoveryToken: token,
		});
		const mail = {
			from: config.mail,
			to: `${user.email}`,
			subject: "Restablece tu contraseña",
			text: `Hola ${user.firstname} este link solo es valido por 15 minutos`,
			html: `<a href="${link}">Recuperar contraseña</a>`,
		};
		const rta = await this.sendMail(mail);
		return rta;
	}

	async changePassword(token, newPassword) {
		try {
			const payload = jwt.verify(token, config.secretRecovery);
			const user = await service.findOne(payload.sub);
			if (user.recoveryToken !== token) throw boom.unauthorized();
			const hash = await bcrypt.hash(newPassword, 10);
			const updatedUser = await service.update(user.id, {
				recoveryToken: null,
				password: hash,
			});
			return {
				message: "Password changed",
			};
		} catch (error) {
			throw boom.badGateway();
		}
	}

	async sendMail(infoEmail) {
		// const user = await this.findUser(email);
		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				user: config.mail,
				pass: config.mailPass,
			},
		});

		// await transporter.sendMail({
		// 	from: `${config.mail}`,
		// 	to: `${user.email}`,
		// 	subject: messageData.subject,
		// 	text: messageData.text,
		// 	html: messageData.html,
		// });
		await transporter.sendMail(infoEmail);
		return {
			message: "email sent",
		};
	}
}

module.exports = AuthService;
