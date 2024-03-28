const { Router } = require("express");
const validatorHandler = require("../middlewares/validator.handler");
const {
  createDriverSchema,
  updateDriverSchema,
  getDriverSchema,
} = require("../schemas/driver.schema");
const DriverService = require("../services/driver.service");
const service = new DriverService();
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const driver = await service.findAll();
    res.json(driver);
  } catch (error) {
    next(error);
  }
});

router.get(
  "/:id",
  validatorHandler(getDriverSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const driver = await service.findOne(id);
      return res.json(driver);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  validatorHandler(createDriverSchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newDriver = await service.create(body);
      res.status(201).json(newDriver);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  "/:id",
  validatorHandler(getDriverSchema, "params"),
  validatorHandler(createDriverSchema, "body"),
  async (req, res, next) => {
    try {
      const data = req.body;
      const { id } = req.params;
      const updateDriver = await service.update(id, data);
      res.json(updateDriver);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
  validatorHandler(getDriverSchema, "params"),
  function (req, res, next) {
    try {
      const { id } = req.params;
      const driver = service.delete(id);
      res.json(driver);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
