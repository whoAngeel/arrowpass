const { Driver, DriversSchema } = require("./driver.model");
const { Journey, JourneysSchema } = require("./journey.model");
const { Reservation, ReservationsSchema } = require("./reservation.model");
const { Seat, SeatsSchema } = require("./seat.model");
const { Terminal, TerminalSchema } = require("./terminal.model");
const { Ticket, TicketsSchema } = require("./ticket.model");
const { User, UsersSchema } = require("./user.model");
const { Vehicle, VehicleSchema } = require("./vehicle.model");

function setupModels(sequelize) {
  // tablas hijas
  Terminal.init(TerminalSchema, Terminal.config(sequelize));
  Vehicle.init(VehicleSchema, Vehicle.config(sequelize));
  User.init(UsersSchema, User.config(sequelize));
  Driver.init(DriversSchema, Driver.config(sequelize));
  //tablas principales
  Seat.init(SeatsSchema, Seat.config(sequelize));
  Journey.init(JourneysSchema, Journey.config(sequelize));
  Reservation.init(ReservationsSchema, Reservation.config(sequelize));
  Ticket.init(TicketsSchema, Ticket.config(sequelize));

  Terminal.associate(sequelize.models);
  Vehicle.associate(sequelize.models);
  User.associate(sequelize.models);
  Driver.associate(sequelize.models);
  Seat.associate(sequelize.models);
  Journey.associate(sequelize.models);
  Reservation.associate(sequelize.models);
  Ticket.associate(sequelize.models);
}

module.exports = setupModels;
