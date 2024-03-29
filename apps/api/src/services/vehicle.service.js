const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class VehicleService {
  constructor() {}

  async create(data) {
    const vehicle = await models.Vehicle.create(data);

    for (let i = 1; i <= vehicle.dataValues.capacity; i++) {
      await models.Seat.create({
        vehicleId: vehicle.id,
        number: i,
        status: "desocupado",
      });
    }

    return vehicle;
  }

  async findAll() {
    return await models.Vehicle.findAll();
  }

  async findOneWithSeats(id) {
    const vehicle = await models.Vehicle.findByPk(id, {
      include: "seats",
    });

    if (!vehicle) {
      throw boom.notFound("Vehiculo no encontrado");
    }

    return vehicle;
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
