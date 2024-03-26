const { Router } = require("express");

const router = new Router();

router.get("/", async (req, res, next) => {
	try {
		res.status(200).json({
			message: "Welcome to the API!",
		});
	} catch (error) {
		next(error);
	}
});
router.get("/:id", async (req, res, next) => {
	try {
		const { id } = req.params;
		return res.status(200).json({ id });
	} catch (error) {
		next(error);
	}
});

router.post("/", async (req, res, next) => {
	try {
		const body = req.body;
		res.status(201).json(body);
	} catch (error) {
		next(error);
	}
});

router.patch("/:id", async (req, res, next) => {
	try {
		const data = req.body;
		const { id } = req.params;
		res.status(200).json(data);
	} catch (error) {
		next(error);
	}
});

router.delete("/:id", function (req, res, next) {
	try {
		const { id } = req.params;
		res.status(200).json(id);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
