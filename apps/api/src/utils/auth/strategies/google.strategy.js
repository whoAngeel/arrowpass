const { config } = require("../../../config");
const { Strategy } = require("passport-google-oauth20");
const boom = require("@hapi/boom");
const UserService = require("../../../services/user.service");
const service = new UserService();

function extractProfile(profile) {
	let imageUrl = "";
	let email = "";
	if (profile.photos && profile.photos.length) {
		imageUrl = profile.photos[0].value;
	}
	if (profile.emails && profile.emails.length) {
		email = profile.emails[0].value;
	}
	return {
		id: profile.id,
		displayName: profile.displayName,
		image: imageUrl,
		email,
	};
}

const GoogleStrategy = new Strategy(
	{
		clientID: config.google_client_id,
		clientSecret: config.google_client_secret,
		callbackURL: "http://localhost:3000/api/auth/login-google/callback",
		// accessType: "offline",
	},
	async function (accessToken, refreshToken, profile, done) {
		console.log(profile)
		try {
			const user = await service.findByEmail(profile.emails[0].value);
			if (!user) {
				console.log("usuario no encontrado");
				const newUser = await service.create({
					firstname: profile.displayName,
					email: profile.emails[0].value,
					role: "passenger",
				});
				return done(null, newUser);
			}
			console.log("usuario encontrado");
			return done(null, user);
		} catch (error) {
			return done(error, false);
		}
	}
);

module.exports = GoogleStrategy;
