const { Router } = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { config } = require("../config");

const router = Router();

function isLoggedInd(req, res, next) {
	req.user ? next() : res.sendStatus(404);
}

router.get("/user/info", (req, res, next) => {
	try {
		res.json({ user: req.user });
	} catch (error) {
		next(error);
	}
});

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
	passport.authenticate("google", { scope: ["email", "profile"] }),
	async (req, res, next) => {
		try {
			console.log(req.user);
			res.json(req.user);
		} catch (error) {
			next(error);
		}
	}
);
router.get("/protected", isLoggedInd, function (req, res) {
	res.send(`Ruta protegida, bienvenido${req.user.firstname}`);
});

router.get("/google/failed", (req, res) => {
	res.send("Fallo en la sesion");
});

router.get(
	"/login-google/callback",
	passport.authenticate("google", {
		successRedirect: "/api/auth/protected",
		failureRedirect: "/api/auth/failed",
	})
);

module.exports = router;
