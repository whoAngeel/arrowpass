const { Model, DataTypes, Sequelize } = require("sequelize");
const { DRIVER_TABLE } = require("./driver.model");
const { TERMINAL_TABLE } = require("./terminal.model");
const { VEHICLE_TABLE } = require("./vehicle.model");

const JOURNEY_TABLE = "journeys";

const JourneysSchema = {
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
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  departureDate: {
    field: "departure_date",
    type: DataTypes.DATE,
    allowNull: false,
  },
  arrivalDate: {
    field: "arrival_date",
    type: DataTypes.DATE,
  },
  duration: {
    type: DataTypes.STRING,
  },
  ticketPrice: {
    field: "ticket_price",
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
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
  static associate(models) {
    this.belongsTo(models.Vehicle, {
      as: "vehicle",
    });

    this.belongsTo(models.Driver, {
      as: "driver",
    });

    this.belongsTo(models.Terminal, {
      as: "terminalStart",
      foreignKey: "terminalStartId",
    });

    this.belongsTo(models.Terminal, {
      as: "terminalEnd",
      foreignKey: "terminalEndId",
    });

    this.hasMany(models.Reservation, {
      as: "reservations",
      foreignKey: "journeyId",
    });
  }

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
