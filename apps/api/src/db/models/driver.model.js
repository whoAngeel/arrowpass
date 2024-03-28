const { Model, DataTypes, Sequelize } = require("sequelize");

const DRIVER_TABLE = "drivers";

const DriversSchema = {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER.UNSIGNED,
	},
	fullname: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	phone: {
		type: DataTypes.STRING(15),
		unique: true,
	},
	nomina: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	address: {
		type: DataTypes.STRING,
	},
	createdAt: {
		field: "created_at",
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: Sequelize.NOW,
	},
};

class Driver extends Model {
	static associate(models) {}

	static config(sequelize) {
		return {
			sequelize,
			tableName: DRIVER_TABLE,
			modelName: "Driver",
			timestamps: false,
		};
	}
}

module.exports = {
	Driver,
	DRIVER_TABLE,
	DriversSchema,
};
