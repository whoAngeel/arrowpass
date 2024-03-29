const { Model, DataTypes, Sequelize } = require("sequelize");
const { JOURNEY_TABLE } = require("./journey.model");
const { USER_TABLE } = require("./user.model");

const RESERVATION_TABLE = "reservations";

const ReservationsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
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
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paymentId: {
    field: "id_payment",
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  createdAt: {
    field: "created_at",
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
};

class Reservation extends Model {
  static associate(models) {
    Reservation.belongsTo(models.Journey, {
      foreignKey: "journeyId",
      as: "journey",
    });

    Reservation.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: RESERVATION_TABLE,
      modelName: "Reservation",
      timestamps: false,
    };
  }
}

module.exports = {
  RESERVATION_TABLE,
  Reservation,
  ReservationsSchema,
};
