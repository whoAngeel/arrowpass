const { Driver, DriversSchema } = require("./driver.model");
const { Seat, SeatsSchema } = require("./seat.model");
const { Terminal, TerminalSchema } = require("./terminal.model");
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

	Terminal.associate(sequelize.models);
	Vehicle.associate(sequelize.models);
	User.associate(sequelize.models);
	Driver.associate(sequelize.models);
	Seat.associate(sequelize.models);
}

module.exports = setupModels;
