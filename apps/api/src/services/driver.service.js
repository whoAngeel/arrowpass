const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class DriverService {
  constructor() {}

  async create(data) {
    return await models.Driver.create(data);
  }

  async findAll() {
    return await models.Driver.findAll();
  }

  async findOne(id) {
    const driver = await models.Driver.findByPk(id);

    if (!driver) {
      throw boom.notFound("Conductor no encontrado");
    }

    return driver;
  }

  async update(id, changes) {
    const driver = await models.Driver.findByPk(id);

    if (!driver) {
      throw boom.notFound("Conductor no encontrado");
    }

    const updatedDriver = await driver.update(changes);

    return updatedDriver;
  }

  async delete(id) {
    const driver = await models.Driver.findByPk(id);

    if (!driver) {
      throw boom.notFound("Conductor no encontrado");
    }

    await driver.destroy();

    return driver;
  }
}

module.exports = DriverService;
