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
router.post(
	"/login-google",
	passport.authenticate("google", { session: false, scope: ["email", "profile"] }),
	async (req, res, next) => {
		try {
			const user = req.user;
			console.log(req);
			return res.status(200).json(user);
		} catch (error) {
			next(error);
		}
	}
);

module.exports = router;
