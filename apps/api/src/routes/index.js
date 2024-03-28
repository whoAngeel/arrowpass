const { Router } = require("express");
const UserRouter = require("./users.routes");
const TicketsRouter = require("./tickets.routes");
const JourneyRouter = require("./journey.routes");
const DriverRouter = require("./driver.routes");
const TerminalRouter = require("./terminal.routes");
const VehicleRouter = require("./vehicle.routes");
const TypeVehicleRouter = require("./transportType.routes");
const SeatsRouter = require("./seats.routes");
const Auth = require("./auth.routes");
const router = Router();

function routerApi(app) {
	const router = Router();
	app.use("/api", router);
	router.use("/users", UserRouter);
	router.use("/tickets", TicketsRouter);
	router.use("/journey", JourneyRouter);
	router.use("/driver", DriverRouter);
	router.use("/terminal", TerminalRouter);
	router.use("/vehicle", VehicleRouter);
	router.use("/type-vehicle", TypeVehicleRouter);
	router.use("/seats", SeatsRouter);
	router.use("/auth", Auth);
}

module.exports = routerApi;
