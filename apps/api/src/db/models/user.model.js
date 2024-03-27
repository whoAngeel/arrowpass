const { Model, DataTypes, Sequelize } = require("sequelize");

const USER_TABLE = "users";

const UsersSchema = {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: DataTypes.INTEGER.UNSIGNED,
	},
	firstname: {
		type: DataTypes.STRING(30),
		allowNull: false,
	},
	lastname: {
		type: DataTypes.STRING(50),
	},
	email: {
		type: DataTypes.STRING,
		unique: true,
		allowNull: false,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	phone: {
		type: DataTypes.STRING(10),
	},
	birthdate: {
		type: DataTypes.DATE,
	},
	createdAt: {
		field: "created_at",
		type: DataTypes.DATE,
		allowNull: false,
		defaultValue: Sequelize.NOW,
	},
};

class User extends Model {
	static associate(models) {}

	static config(sequelize) {
		return {
			sequelize,
			tableName: USER_TABLE,
			modelName: "User",
			timestamps: false,
		};
	}
}

module.exports = {
	UsersSchema,
	User,
	USER_TABLE,
};
