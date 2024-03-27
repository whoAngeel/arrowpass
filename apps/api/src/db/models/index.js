const { Terminal, TerminalSchema } = require("./terminal.model");
const { Vehicle, VehicleSchema } = require("./vehicle.model");
function setupModels(sequelize) {
	Terminal.init(TerminalSchema, Terminal.config(sequelize));
	Vehicle.init(VehicleSchema, Vehicle.config(sequelize));

	//
	Terminal.associate(sequelize.models);
	Vehicle.associate(sequelize.models);
}

module.exports = setupModels;
