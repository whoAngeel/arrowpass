const { Model, DataTypes, Sequelize } = require("sequelize");

const TICKET_TABLE = "tickets";

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
