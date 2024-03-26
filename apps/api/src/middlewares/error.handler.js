const debug = require("debug")("api:errors-middleware");

function logErrors(error, req, res, next) {
	console.error("errorlog", error.message);
	next(error);
}

function errorHandler(error, req, res, next) {
	debug(error.message);
	res.status(500).json({
		message: error.message,
		stack: error.stack,
	});
}

function boomErrorHandler(err, req, res, next) {
	if (err.isBoom) {
		const { output } = err;
		res.status(output.statusCode).json(output.payload);
	} else {
		next(err);
	}
}

module.exports = {
	logErrors,

	errorHandler,
	boomErrorHandler,
};
