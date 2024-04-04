const boom = require("@hapi/boom");
const { config } = require("../config");
const { GoogleAuth } = require("google-auth-library");
const moment = require("moment");
const jwt = require("jsonwebtoken");

const httpClient = new GoogleAuth({
	credentials: config.credentials,
	scopes: "https://www.googleapis.com/auth/wallet_object.issuer",
});

let genericClass = {
	id: `${config.issuerId}`,
	classTemplateInfo: {
		cardTemplateOverride: {
			cardRowTemplateInfos: [
				{
					threeItems: {
						startItem: {
							firstValue: {
								fields: [
									{
										fieldPath:
											"object.textModulesData['salida']",
									},
								],
							},
						},
						middleItem: {
							firstValue: {
								fields: [
									{
										fieldPath:
											"object.textModulesData['llegada']",
									},
								],
							},
						},
						endItem: {
							firstValue: {
								fields: [
									{
										fieldPath: "object.textModulesData['fecha']",
									},
								],
							},
						},
					},
				},
				{
					twoItems: {
						startItem: {
							firstValue: {
								fields: [
									{
										fieldPath:
											"object.textModulesData['origen']",
									},
								],
							},
						},
						endItem: {
							firstValue: {
								fields: [
									{
										fieldPath:
											"object.textModulesData['destino']",
									},
								],
							},
						},
					},
				},
				{
					threeItems: {
						startItem: {
							firstValue: {
								fields: [
									{
										fieldPath:
											"object.textModulesData['categoria']",
									},
								],
							},
						},
						middleItem: {
							firstValue: {
								fields: [
									{
										fieldPath:
											"object.textModulesData['asiento']",
									},
								],
							},
						},
						endItem: {
							firstValue: {
								fields: [
									{
										fieldPath: "object.textModulesData['anden']",
									},
								],
							},
						},
					},
				},
			],
		},
	},
};
class GoogleWalletService {
	constructor() {}

	async createPassClass() {
		let response;
		try {
			// Check if the class exists already
			response = await httpClient.request({
				url: `${config.baseURL}/genericClass/${config.classId}`,
				method: "GET",
			});

			// console.log("Class already exists");
			// console.log(response);
			return {
				message: "Class already exists",
				response,
			};
		} catch (err) {
			if (err.response && err.response.status === 404) {
				// Class does not exist
				// Create it now
				response = await httpClient.request({
					url: `${config.baseURL}/genericClass`,
					method: "POST",
					data: genericClass,
				});

				// console.log("Class insert response");
				// console.log(response);
				return {
					message: "Class inserted response",
					response,
				};
			} else {
				// Something else went wrong
				// console.log(err);
				// res.send("Something went wrong...check the console logs!");
				throw boom.badRequest(
					"An error occurred while checking for existing classes"
				);
			}
		}
	}

	async createPassObject(email, ticketData) {
		// TODO: Create a new Generic pass for the user
		let objectSuffix = `${email.replace(/[^\w.-]/g, "_")}`;
		let objectId = `${config.issuerId}.${objectSuffix}`;

		let genericObject = {
			id: `${objectId}`,
			classId: config.classId,
			logo: {
				sourceUri: {
					uri: "https://play-lh.googleusercontent.com/IAxHkCSs2Us6cPQaW7A0brAXsPWb8c7BEVfB9KmrUx8YMTv4wV8jUETuKcqJ9BvJE3s",
				},
				contentDescription: {
					defaultValue: {
						language: "en-US",
						value: "LOGO_IMAGE_DESCRIPTION",
					},
				},
			},
			cardTitle: {
				defaultValue: {
					language: "en-US",
					value: ticketData.folio,
				},
			},
			subheader: {
				defaultValue: {
					language: "en-US",
					value: ticketData.service,
				},
			},
			header: {
				defaultValue: {
					language: "en-US",
					value: ticketData.passenger,
				},
			},
			textModulesData: [
				{
					id: "salida",
					header: "SALIDA",
					body: moment(ticketData.departureDate).format("h:mm a"),
				},
				{
					id: "llegada",
					header: "LLEGADA",
					body: "10:00 pm",
				},
				{
					id: "fecha",
					header: "FECHA",
					body: moment(ticketData.departureDate).format("DD/MM/YY"),
				},
				{
					id: "origen",
					header: "Origen",
					body: ticketData.from,
				},
				{
					id: "destino",
					header: "Destino",
					body: ticketData.to,
				},
				{
					id: "categoria",
					header: "Categoria",
					body: ticketData.category,
				},
				{
					id: "asiento",
					header: "Asiento",
					body: ticketData.seatNumber,
				},
				{
					id: "anden",
					header: "Anden",
					body: ticketData.boardingGate,
				},
			],
			barcode: {
				type: "QR_CODE",
				value: "BARCODE_VALUE",
				alternateText: "",
			},
			hexBackgroundColor: "#6f9fec",
			heroImage: {
				sourceUri: {
					uri: "https://www.conectagfa.com.mx/assets/img/conectaGfa.png",
				},
				contentDescription: {
					defaultValue: {
						language: "en-US",
						value: "HERO_IMAGE_DESCRIPTION",
					},
				},
			},
		};

		const claims = {
			iss: config.credentials.client_email,
			aud: "google",
			origins: [],
			typ: "savetowallet",
			payload: {
				genericObjects: [genericObject],
			},
		};

		const token = jwt.sign(claims, config.credentials.private_key, {
			algorithm: "RS256",
		});
		const saveUrl = `https://pay.google.com/gp/v/save/${token}`;
		console.log(saveUrl);
		return `<a href='${saveUrl}'><img src='wallet-button.png'></a>`;
	}
}

module.exports = GoogleWalletService;
