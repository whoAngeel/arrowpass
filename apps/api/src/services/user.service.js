const boom = require("@hapi/boom");
const bcrypt = require("bcrypt");
const { models } = require("../libs/sequelize");

class UserService {
	constructor() {}

	async create(data) {
		const hash = await bcrypt.hash(data.password, await bcrypt.genSalt());
		const newUser = await models.User.create({
			...data,
			password: hash,
		});

		delete newUser.dataValues.password;

		return newUser;
	}

	async findAll() {
		return await models.User.findAll({
			attributes: { exclude: ["password"] },
		});
	}

	async findOne(id) {
		const user = await models.User.findByPk(id, {
			attributes: {
				exclude: ["password"],
			},
		});

		if (!user) throw boom.notFound("User not found");

		return user;
	}

	async findByEmail(email) {
		const user = await models.User.findOne({
			where: { email },
		});
		// if (!user) throw boom.notFound("User not found");
		return user;
	}

	async findOrCreate(data) {
		// console.log(data.email);
		const user = await this.findByEmail(data.email);
		if (!user) {
			const newUser = await models.User.create(data);
			if (!newUser) throw boom.badData("Error creating new user");
			return newUser;
		}
		return user;
	}

	async update(id, changes) {
		const user = this.findOne(id);

		const updatedUser = await user.update(changes);
		delete updatedUser.dataValues.password;

		return {
			message: "User updated successfully",
			updatedUser,
		};
	}

	async delete(id) {
		const user = this.findOne(id);

		await user.destroy();

		return user;
	}
}

module.exports = UserService;
