const { Strategy } = require("passport-local");
const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");

const UserService = require("../../../services/user.service");
const service = new UserService();

const LocalStrategy = new Strategy(
	{
		usernameField: "email",
		passwordField: "password",
	},
	async (username, password, done) => {
		try {
			const user = await service.findByEmail(username);
			console.log(user);
			if (!user) done(boom.unauthorized(), false);
			const isMatch = await bcrypt.compare(password, user.password);
			if (!isMatch) done(boom.unauthorized(), false);
			done(null, user);
		} catch (error) {
			done(error, false);
		}
	}
);

module.exports = LocalStrategy;
