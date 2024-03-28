const { DataTypes, Model, Sequelize } = require("sequelize");

const TERMINAL_TABLE = "terminals";

const TerminalSchema = {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER.UNSIGNED,
	},
	name: {
		allowNull: false,
		type: DataTypes.STRING(50),
	},
	phone: {
		type: DataTypes.STRING(10),
	},
	email: {
		type: DataTypes.STRING,
	},
	address: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	coords: {
		type: DataTypes.JSON,
	},
	createdAt: {
		type: DataTypes.DATE,
		field: "created_at",
		allowNull: false,
		defaultValue: Sequelize.NOW,
	},
};

class Terminal extends Model {
	static associate(models) {
		///
	}
	static config(sequelize) {
		return {
			sequelize,
			tableName: TERMINAL_TABLE,
			modelName: "Terminal",
			timestamps: false,
		};
	}
}

module.exports = {
	Terminal,
	TerminalSchema,
	TERMINAL_TABLE,
};
