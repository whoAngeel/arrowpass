const { Model, DataTypes, Sequelize } = require("sequelize");
const { JOURNEY_TABLE } = require("./journey.model");
const { USER_TABLE } = require("./user.model");

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
	seatNumber: {
		field: "seat_number",
		type: DataTypes.STRING,
		allowNull: false,
	},
	price: {
		type: DataTypes.DOUBLE,
		allowNull: false,
	},
	payStub: {
		// folio de pago o algo asi
		type: DataTypes.STRING,
	},
	passengerName: {
		field: "passenger_name",
		type: DataTypes.STRING,
		allowNull: false,
	},
	type: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	journeyId: {
		field: "id_journey",
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false,
		references: {
			model: JOURNEY_TABLE,
			key: "id",
		},
		onDelete: "RESTRICT",
		onUpdate: "CASCADE",
	},
	userId: {
		field: "id_user",
		type: DataTypes.INTEGER.UNSIGNED,
		allowNull: false,
		references: {
			model: USER_TABLE,
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
