const axios = require("axios");
const getShortName = require("./shortnames.service");
const { PKPass } = require("passkit-generator");
const { readFile, writeFile } = require("fs/promises");

async function generateAppleTicket(organization, ticket) {
	const newPass = await PKPass.from(
		{
			model: "./apple-wallet/model/arrow.pass",
			certificates: {
				wwdr: await readFile("./apple-wallet/certs/wwdr.pem"),
				signerCert: await readFile("./apple-wallet/certs/signerCert.pem"),
				signerKey: await readFile("./apple-wallet/certs/signerKey.pem"),
				signerKeyPassphrase: "talend",
			},
		},
		{
			organizationName: organization?.name,
		}
	);

	newPass.headerFields.push(
		{
			value: ticket?.serviceNumber,
			label: "servicio",
			key: "serviceNumber",
		},
		{
			key: "origin",
			value: getShortName(ticket?.origin),
			label: ticket?.origin,
		},
		{
			key: "destination",
			value: getShortName(ticket?.destination),
			label: ticket?.destination,
			textAlignment: "PKTextAlignmentRight",
		}
	);

	newPass.secondaryFields.push(
		{
			key: "passenger",
			value: ticket?.passengerName,
			label: "Pasajero",
		},
		{
			key: "seatNumber",
			value: ticket?.seatNumber,
			label: "asiento",
		},
		{
			key: "gate",
			value: ticket?.gate,
			label: "Carril",
			changeMessage: "La puerta de abordaje ha camibiado a @%",
		}
	);

	newPass.auxiliaryFields.push(
		{
			key: "departureDate",
			value: ticket?.departureDate,
			label: "Fecha de salida",
			timeStyle: "PKDateStyleNone",
			dateStyle: "PKDateStyleLong",
		},
		{
			key: "departureTime",
			value: ticket?.departureTime,
			label: "Hora de salida",
			changeMessage: "La hora de salida de tu viaje ha cambiado a %@",
			textAlignment: "PKTextAlignmentRight",
		}
	);

	newPass.setBarcodes({
		format: "PKBarcodeFormatQR",
		message: ticket?.barcodeValue,
		messageEncoding: "iso-8859-1",
	});

	const heaederLogoResponse = await axios.get(organization?.headerLogo, {
		responseType: "arraybuffer",
	});
	const headerLogoBuffer = Buffer.from(heaederLogoResponse.data, "utf-8");

	const footerLogoResponse = await axios.get(organization?.footerLogo, {
		responseType: "arraybuffer",
	});
	const footerLogoBuffer = Buffer.from(footerLogoResponse.data, "utf-8");

	newPass.addBuffer("logo.png", headerLogoBuffer);
	newPass.addBuffer("footer.png", footerLogoBuffer);

	const ticketBuffer = newPass.getAsBuffer();
	const fileName = "passes/ticket.pkpass";

	await writeFile(fileName, ticketBuffer, (err) => {
		if (err) {
			console.error("Error writing file:", err);
		} else {
			console.log("File saved successfully!");
		}
	});
	return fileName;
}

module.exports = generateAppleTicket;
