const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const { models } = require("../libs/sequelize");

class UserService {
  constructor() {}

  async create(data) {
    const hash = await bcrypt.hash(data.password, await bcrypt.genSalt());
    const newUser = await models.User.create({
      ...data,
      password: hash,
    });

    delete newUser.dataValues.password;

    return newUser;
  }

  async findAll() {
    return await models.User.findAll({
      attributes: { exclude: ["password"] },
    });
  }

  async findOne(id) {
    const user = await models.User.findByPk(id, {
      attributes: { exclude: ["password"] },
    });

    if (!user) {
      throw boom.notFound("Usuario no encontrado");
    }

    return user;
  }

  async findOneWithTickets(id) {
    const user = await models.User.findByPk(id, {
      attributes: { exclude: ["password"] },
      include: ["tickets", "reservations"],
    });

    if (!user) {
      throw boom.notFound("Usuario no encontrado");
    }

    return user;
  }

  async update(id, changes) {
    const user = await models.User.findByPk(id);

    if (!user) {
      throw boom.notFound("Usuario no encontrado");
    }

    const updatedUser = await user.update(changes);
    delete updatedUser.dataValues.password;

    return updatedUser;
  }

  async delete(id) {
    const user = await models.User.findByPk(id);

    if (!user) {
      throw boom.notFound("Usuario no encontrado");
    }

    await user.destroy();

    return user;
  }
}

module.exports = UserService;
