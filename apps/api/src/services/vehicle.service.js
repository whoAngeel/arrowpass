const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class VehicleService {
  constructor() {}

  async create(data) {
    return await models.Vehicle.create(data);
  }

  async findAll() {
    return await models.Vehicle.findAll();
  }

  async findOne(id) {
    const vehicle = await models.Vehicle.findByPk(id);

    if (!vehicle) {
      throw boom.notFound("Vehiculo no encontrado");
    }

    return vehicle;
  }

  async update(id, changes) {
    const vehicle = await models.Vehicle.findByPk(id);

    if (!vehicle) {
      throw boom.notFound("Vehiculo no encontrado");
    }

    const updatedVehicle = await vehicle.update(changes);

    return updatedVehicle;
  }

  async delete(id) {
    const vehicle = await models.Vehicle.findByPk(id);

    if (!vehicle) {
      throw boom.notFound("Vehiculo no encontrado");
    }

    await vehicle.destroy();

    return vehicle;
  }
}

module.exports = VehicleService;
