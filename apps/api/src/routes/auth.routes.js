const { Router } = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { config } = require("../config");

const UserService = require("../services/user.service");
const validatorHandler = require("../middlewares/validator.handler");
const { registerUserSchema } = require("../schemas/users.schema");
const userServiceInstance = new UserService();

const router = Router();

function isLoggedIn(req, res, next) {
	req.user ? next() : res.sendStatus(404);
}

function generateUserToken(userData) {
	const payload = {
		sub: userData.id,
		user: userData,
	};
	const token = jwt.sign(payload, config.secret);
	return token;
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
			const token = generateUserToken(user);
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
	"/register",
	validatorHandler(registerUserSchema, "body"),
	async (req, res, next) => {
		try {
			const data = req.body;
			const userData = {
				...data,
				role: "passenger",
			};

			const newUser = await userServiceInstance.create(userData);
			const token = generateUserToken(newUser);
			res.status(201).json({
				newUser,
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
			const user = req.user;
			const token = generateUserToken(user);
			delete user.dataValues.password;
			res.json({
				user,
				token,
			});
		} catch (error) {
			next(error);
		}
	}
);
router.get("/protected", isLoggedIn, function (req, res) {
	res.send(`Ruta protegida, bienvenido ${req.user.firstname}`);
});

router.get("/google/failed", (req, res) => {
	res.send("Fallo en la sesion");
});

router.get(
	"/login-google/callback",
	passport.authenticate("google"),
	(req, res, next) => {
		try {
			const user = req.user;
			const payload = {
				sub: user.id,
				user: user,
			};
			const token = jwt.sign(payload, config.secret);
			delete user.dataValues.password;
			res.json({
				user,
				token,
			});
		} catch (error) {
			next(error);
		}
	}
);

module.exports = router;
