const boom = require("@hapi/boom");
const nodemailer = require("nodemailer");
const { config } = require("../config");
const fs = require("fs");
const ejs = require("ejs");

class EmailService {
	constructor() {}

	async sendGMailTicket(email, passenger, token) {
		const htmlContent = this.generateHTMLContent(passenger, token);
		const mailOptions = this.composeMailOptions(
			email,
			htmlContent,
			"Boleto Virtual"
		);
		try {
			await this.sendEmail(mailOptions);
			console.log("Correo enviado correctamente");
			return {
				message: "Email enviado",
			};
		} catch (error) {
			console.error("Error al enviar el correo electrónico:", error);
			throw boom.badImplementation("Error al enviar el correo electrónico");
		}
	}

	async sendAppleTicket(email, pathFile) {
		try {
			const mailOptions = this.composeMailOptions(
				email,
				null,
				"Boleto Virtual (apple)"
			);
			await this.sendEmail(mailOptions);
			console.log("Correo enviado correctamente");
			return {
				message: "Email enviado",
			};
		} catch (error) {
			console.error("Error al enviar el correo electrónico:", error);
			throw boom.badImplementation("Error al enviar el correo electrónico");
		}
	}

	generateHTMLContent(passenger, token) {
		const htmlTemplate = fs.readFileSync("public/template.ejs", "utf-8");
		return ejs.render(htmlTemplate, { passenger, token });
	}

	composeMailOptions(email, htmlContent, subject) {
		return {
			from: config.mail,
			to: email,
			subject: subject,
			html: htmlContent,
		};
	}

	async sendEmail(mailOptions) {
		const transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				user: config.mail,
				pass: config.mailPass,
			},
		});
		await transporter.sendMail(mailOptions);
	}
}

module.exports = EmailService;
