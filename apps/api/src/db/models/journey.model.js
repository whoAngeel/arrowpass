const { Model, DataTypes, Sequelize } = require("sequelize");
const { DRIVER_TABLE } = require("./driver.model");
const { TERMINAL_TABLE } = require("./terminal.model");
const { VEHICLE_TABLE } = require("./vehicle.model");

const JOURNEY_TABLE = "journeys";

const JourneysSchema = {
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
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false,
		references: {
			model: DRIVER_TABLE,
			key: "id",
		},
		onDelete: "RESTRICT",
		onUpdate: "CASCADE",
	},
	terminalEndId: {
		field: "id_terminal_end",
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false,
		references: {
			model: TERMINAL_TABLE,
			key: "id",
		},
		onDelete: "RESTRICT",
		onUpdate: "CASCADE",
	},
	terminalStartId: {
		field: "id_terminal_start",
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false,
		references: {
			model: TERMINAL_TABLE,
			key: "id",
		},
		onDelete: "RESTRICT",
		onUpdate: "CASCADE",
	},
	vehicleId: {
		field: "id_vehicle",
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false,
		references: {
			model: VEHICLE_TABLE,
			key: "id",
		},
		onDelete: "RESTRICT",
		onUpdate: "CASCADE",
	},
	createdAt: {
		field: "created_at",
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: Sequelize.NOW,
	},
};

class Journey extends Model {
	static associate(models) {}

	static config(sequelize) {
		return {
			sequelize,
			tableName: JOURNEY_TABLE,
			modelName: "Journey",
			timestamps: false,
		};
	}
}

module.exports = {
	JOURNEY_TABLE,
	Journey,
	JourneysSchema,
};
