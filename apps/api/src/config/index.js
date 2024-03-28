require("dotenv").config();

const config = {
	port: process.env.PORT || 3000,
	dbHost: process.env.DB_HOST,
	dbUser: process.env.DB_USER,
	dbPass: process.env.DB_PASS,
	dbPort: process.env.DB_PORT,
	dbName: process.env.DB_NAME,
	secret: process.env.JWT_SECRET,
};

module.exports = { config };
