const { Router } = require("express");
const UserRouter = require("./users.routes");
const JourneyRouter = require("./journey.routes");
const DriverRouter = require("./driver.routes");
const TerminalRouter = require("./terminal.routes");
const VehicleRouter = require("./vehicle.routes");
const TicketRouter = require("./ticket.routes");
const Auth = require("./auth.routes");

function routerApi(app) {
  const router = Router();
  app.use("/api", router);
  router.use("/users", UserRouter);
  router.use("/journey", JourneyRouter);
  router.use("/driver", DriverRouter);
  router.use("/terminal", TerminalRouter);
  router.use("/vehicle", VehicleRouter);
  router.use("/ticket", TicketRouter);
  router.use("/auth", Auth);
}

module.exports = routerApi;
