const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class TicketService {
  constructor() {}
  
  async findOne(id) {
    const ticket = await models.Ticket.findByPk(id, {
      include: [
        "user",
        {
          model: models.Reservation,
          as: "reservation",
          include: {
            model: models.Journey,
            as: "journey",
            include: [
              "driver",
              "vehicle",
              "driver",
              "terminalStart",
              "terminalEnd",
            ],

          },
        },
        "seat",
      ],
    });

    if (!ticket) {
      throw boom.notFound("Ticket no encontrado");
    }

    return ticket;
  }
}

module.exports = TicketService;
