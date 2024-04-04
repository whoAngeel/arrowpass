const swaggerJSDocs = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const options = {
	definition: {
		openapi: "3.0.0",
		info: { title: "ArroWPass API", version: "1.0.0" },
		apis: ["src/routes/workout"],
	},
};
