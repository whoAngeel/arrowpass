const { Model, DataTypes, Sequelize } = require("sequelize");

const JOURNEY_TABLE = "";

const TicketsSchema = {
	// TODO Terminar este
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER.UNSIGNED,
	},
	status: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	routeName: {
		field: "route_name",
		type: DataTypes.STRING,
		allowNull: false,
	},
	departureTime: {
		// hora de salida
		field: "departure_time",
		type: DataTypes.STRING,
		allowNull: false,
	},
	arrivalTime: {
		// hora de llegada
		field: "arrival_time",
		type: DataTypes.STRING,
	},
	duration: {
		type: DataTypes.STRING,
	},
	driverId: {
		field: "id_driver",
	},
	terminalEndId: {
		field: "id_terminal_end",
	},
	terminalStartId: {
		field: "id_terminal_start",
	},
	vehicleId: {
		field: "id_vehicle",
	},
	createdAt: {
		field: "created_at",
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: Sequelize.NOW,
	},
};

class Ticket extends Model {
	static associate(models) {}

	static config(sequelize) {
		return {
			sequelize,
			tableName: TICKET_TABLE,
			modelName: "Ticket",
			timestamps: false,
		};
	}
}

module.exports = {
	TICKET_TABLE,
	Ticket,
	TicketsSchema,
};
