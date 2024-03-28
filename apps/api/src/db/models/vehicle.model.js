const { DataTypes, Sequelize, Model } = require("sequelize");

const VEHICLE_TABLE = "vehicles";

const VehicleSchema = {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER.UNSIGNED,
	},
	plates: {
		// placas del vehiculo
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	type: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	model: {
		type: DataTypes.STRING,
	},
	color: {
		type: DataTypes.STRING,
	},
	brand: {
		type: DataTypes.STRING,
	},
	capacity: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	details: {
		type: DataTypes.STRING(512),
	},
	createdAt: {
		field: "created_at",
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: Sequelize.NOW,
	},
};

class Vehicle extends Model {
	static associate(models) {
		this.hasMany(models.Seat, {
			as: "seats",
			foreignKey: "vehicleId", // TODO testear que un vehiculo tenga muchos asientos
		});
	}
	static config(sequelize) {
		return {
			sequelize,
			tableName: VEHICLE_TABLE,
			modelName: "Vehicle",
			timestamps: false,
		};
	}
}

module.exports = {
	Vehicle,
	VehicleSchema,
	VEHICLE_TABLE,
};
