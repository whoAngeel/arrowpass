const { Router } = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { config } = require("../config");

const UserService = require("../services/user.service");
const validatorHandler = require("../middlewares/validator.handler");
const { registerUserSchema } = require("../schemas/users.schema");
const userServiceInstance = new UserService();
const AuthService = require("../services/auth.service");
const authservice = new AuthService();

const router = Router();

function isLoggedIn(req, res, next) {
	req.user ? next() : res.sendStatus(404);
}

router.get("/user/info", (req, res, next) => {
	try {
		res.json({ user: req.user });
	} catch (error) {
		next(error);
	}
});

router.post("/recovery", async (req, res, next) => {
	try {
		const { email } = req.body;
		const messageData = {
			subject: "Recuperar contraseña",
			text: "Para recuperar tu correo da click aqui",
			html: `<button>Recuperar</button>`,
		};
		const rta = await authservice.sendRecovery(email);
		res.json(rta);
	} catch (error) {
		next(error);
	}
});

router.post("/change-password", async (req, res, next) => {
	try {
		const { token, newPassword } = req.body;
		const rta = await authservice.changePassword(token, newPassword);
		res.json(rta);
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
			const rta = authservice.signToken(user);
			return res.status(200).json(rta);
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
			// console.log(req.user);
			const user = req.user;
			const rta = authservice.signToken(user);
			return res.json(rta);
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
			const rta = authservice.signToken(user);
			res.json(rta);
		} catch (error) {
			next(error);
		}
	}
);

module.exports = router;
