const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class TerminalService {
  constructor() {}

  async create(data) {
    return await models.Terminal.create(data);
  }

  async findAll() {
    return await models.Terminal.findAll();
  }

  async findOne(id) {
    const terminal = await models.Terminal.findByPk(id);

    if (!terminal) {
      throw boom.notFound("Terminal no encontrada");
    }

    return terminal;
  }

  async update(id, changes) {
    const terminal = await models.Terminal.findByPk(id);

    if (!terminal) {
      throw boom.notFound("Terminal no encontrada");
    }

    const updatedTerminal = await terminal.update(changes);

    return updatedTerminal;
  }

  async delete(id) {
    const terminal = await models.Terminal.findByPk(id);

    if (!terminal) {
      throw boom.notFound("Terminal no encontrada");
    }

    await terminal.destroy();

    return terminal;
  }
}

module.exports = TerminalService;
