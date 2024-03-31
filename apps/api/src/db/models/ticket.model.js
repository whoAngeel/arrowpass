const { Model, DataTypes, Sequelize } = require("sequelize");
const { RESERVATION_TABLE } = require("./reservation.model");
const { USER_TABLE } = require("./user.model");
const { SEAT_TABLE } = require("./seat.model");

const TICKET_TABLE = "tickets";

const TicketsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
  },
  reservationId: {
    field: "id_reservation",
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: RESERVATION_TABLE,
      key: "id",
    },
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  },
  seatId: {
    field: "id_seat",
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: SEAT_TABLE,
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
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    field: "created_at",
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
};

class Ticket extends Model {
  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
    });

    this.belongsTo(models.Reservation, {
      foreignKey: "reservationId",
      as: "reservation",
    });

    this.belongsTo(models.Seat, {
      foreignKey: "seatId",
      as: "seat",
    });
  }

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