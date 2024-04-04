const boom = require("@hapi/boom");
const nodemailer = require("nodemailer");
const { config } = require("../config");
const fs = require("fs");
const ejs = require("ejs");

class EmailService {
	constructor() {}

	async sendGMailTicket(ticketBody, link) {
		const htmlContent = this.generateHTMLContent(ticketBody?.passenger, link);
		const mailOptions = this.composeMailOptions(
			ticketBody.email,
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
			let mailOptions = this.composeMailOptions(
				email,
				null,
				"Boleto Virtual (apple)"
			);

			await this.sendEmail({
				...mailOptions,
				attachments: [
					{
						filename: "style.css",
						path: "./public/css/style.css",
						cid: "uniq-stylecss.png",
					},
				],
			});
			console.log("Correo enviado correctamente");
			return {
				message: "Email enviado",
			};
		} catch (error) {
			console.error("Error al enviar el correo electrónico:", error);
			throw boom.badImplementation("Error al enviar el correo electrónico");
		}
	}

	generateHTMLContent(passenger, link) {
		const htmlTemplate = fs.readFileSync("public/template.ejs", "utf-8");
		return ejs.render(htmlTemplate, { passenger, link });
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
