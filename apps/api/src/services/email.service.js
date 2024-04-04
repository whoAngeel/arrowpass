const boom = require("@hapi/boom");
const nodemailer = require("nodemailer");
const { config } = require("../config");
const fs = require("fs");
// const HTMLTemplate = fs.readFileSync("public/EmailTemplate.html", "utf-8");
const ejs = require("ejs");

class EmailService {
	constructor() {}
	async sendMail(email, passenger, token) {
		const htmlTemplate = fs.readFileSync("public/template.ejs", "utf-8");
		const htmlContent = ejs.render(htmlTemplate, { passenger, token });
		const mail = {
			from: config.mail,
			to: `${email}`,
			subject: "Boleto Virtual",
			html: htmlContent,
		};

		let transporter = nodemailer.createTransport({
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				user: config.mail,
				pass: config.mailPass,
			},
		});

		try {
			await transporter.sendMail(mail);
			console.log("Correo enviado correctamente");
			return {
				message: "Email enviado",
			};
		} catch (error) {
			console.error("Error al enviar el correo electrónico:", error);
			throw boom.badImplementation("Error al enviar el correo electrónico");
		}
	}
}

module.exports = EmailService;
