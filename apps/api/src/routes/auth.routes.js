const { Router } = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { config } = require("../config");

const router = Router();

router.post(
	"/login/local",
	passport.authenticate("local", { session: false }),
	async (req, res, next) => {
		try {
			const user = req.user;
			const payload = {
				sub: user.id,
				user: user,
			};
			const token = jwt.sign(payload, config.secret);
			delete user.dataValues.password;
			return res.json({
				user,
				token,
			});
		} catch (error) {
			next(error);
		}
	}
);
router.get(
	"/login-google",
	passport.authenticate("google", { session: false, scope: ["email", "profile"] }),
);

router.get(
	"/login-google/callback",
	passport.authenticate("google"), (request, response) =>{
		response.send(200);
	},
);


module.exports = router;
