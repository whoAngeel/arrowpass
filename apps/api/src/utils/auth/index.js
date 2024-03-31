const passport = require("passport");

const LocalStrategy = require("./strategies/local.strategy");
const { config } = require("../../config");
const GoogleStrategy = require("./strategies/google.strategy");
const JwtStrategy = require("./strategies/jwt.strategy");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
passport.use(LocalStrategy);
passport.use(GoogleStrategy);
passport.use(JwtStrategy);
passport.serializeUser((user, cb) => {
	cb(null, user);
});
passport.deserializeUser((user, cb) => {
	cb(null, user);
});
