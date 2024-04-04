require("dotenv").config();
const { v4: uuidv4 } = require("uuid");
const config = {
	port: process.env.PORT || 3000,
	dbHost: process.env.DB_HOST,
	dbUser: process.env.DB_USER,
	dbPass: process.env.DB_PASS,
	dbPort: process.env.DB_PORT,
	dbName: process.env.DB_NAME,
	secret: process.env.JWT_SECRET,
	google_client_id: process.env.GOOGLE_CLIENT_ID,
	google_client_secret: process.env.GOOGLE_CLIENT_SECRET,
	apiKey: process.env.APIKEY || "apikeyxd",
	mailPass: process.env.GOOGLE_MAIL_PASS,
	mail: process.env.GOOGLE_MAIL,
	secretRecovery: process.env.SECRET_RECOVERY || "recoverysecret",
	/// google wallet
	issuerId: process.env.GOOGLE_ISSUER_ID,
	classSuffix: uuidv4(),
	baseURL: process.env.G_WALLET_BASE_URL,
	//credentials: process.env.GOOGLE_APPLICATION_CREDENTIALS || "../../src/optimal.json",

};

module.exports = { config };
