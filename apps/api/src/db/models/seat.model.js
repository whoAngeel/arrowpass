const { Model, DataTypes, Sequelize } = require("sequelize");
const { VEHICLE_TABLE } = require("./vehicle.model");

const SEAT_TABLE = "seats";

const SeatsSchema = {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER.UNSIGNED,
	},
	status: {
		type: DataTypes.STRING,
	},
	number: {
		// numero de asiento
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false,
	},
	position: {
		type: DataTypes.STRING,
	},
	vehicleId: {
		field: "id_vehicle",
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false,
		references: {
			model: VEHICLE_TABLE,
			key: "id",
		},
		onUpdate: "CASCADE",
		onDelete: "RESTRICT",
	},
	createdAt: {
		field: "created_at",
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: Sequelize.NOW,
	},
};

class Seat extends Model {
	static associate(models) {}

	static config(sequelize) {
		return {
			sequelize,
			tableName: SEAT_TABLE,
			modelName: "Seat",
			timestamps: false,
		};
	}
}

module.exports = {
	SEAT_TABLE,
	Seat,
	SeatsSchema,
};
