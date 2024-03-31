const boom = require("@hapi/boom");
const { config } = require("../config");

function checkAPIKey(req, res, next) {
	const ApiKey = req.headers["api"];
	if (ApiKey == config.apiKey) next();
	else next(boom.unauthorized());
}

function checkRoles(roles) {
	return (req, res, next) => {
		const user = req.user.user;
		console.log(user);
		if (roles.includes(user.role)) next();
		else next(boom.unauthorized());
	};
}

module.exports = {
	checkAPIKey,
	checkRoles,
};
