const { config } = require("../../../config");
const { Strategy } = require("passport-google-oauth20");
const boom = require("@hapi/boom");
const UserService = require("../../../services/user.service");
const service = new UserService();

const GoogleStrategy = new Strategy(
	{
		clientID: config.google_client_id,
		clientSecret: config.google_client_secret,
		callbackURL: "http://localhost:3000/api/auth/login/google/callback",
		// accessType: "offline",
	},

	async function verify(accessToken, refreshToken, profile, done) {
		const user = await service.findByEmail(profile.emails[0].value);

		console.log(profile.emails[0].value);
		if (!user) {
			// done(boom.notFound());
			const newUser = await service.create({
				email: profile.emails[0].value,
				firstname: profile.displayName,
				role: "passenger",
			});
			done(null, newUser);
		}
		done(null, user);
	}
);

module.exports = GoogleStrategy;
