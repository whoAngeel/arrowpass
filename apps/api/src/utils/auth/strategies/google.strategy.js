const { config } = require("../../../config");
const { Strategy } = require("passport-google-oauth20");
const boom = require("@hapi/boom");
const UserService = require("../../../services/user.service");
const service = new UserService();

const GoogleStrategy = new Strategy(
	{
		clientID: config.google_client_id,
		clientSecret: config.google_client_secret,
		callbackURL: "http://localhost:3000/api/auth/login-google/callback",
		// accessType: "offline",
	},
	async function (accessToken, refreshToken, profile, done) {
		try {
			console.log(profile.name.givenName);
			const userData = {
				email: profile.emails[0].value,
				firstname: profile.name.givenName,
				lastname: profile.name.familyName,
				role: "passenger",
			};
			// console.log(userData);
			const user = await service.findOrCreate(userData);
			if (!user) {
				done(boom.badGateway(), false);
			}

			console.log("usuario encontrado");
			done(null, user);
		} catch (error) {
			done(error, false);
		}

		// done(null, user);
	}
);

module.exports = GoogleStrategy;
