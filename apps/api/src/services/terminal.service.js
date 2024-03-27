const boom = require("@hapi/boom");

class TerminalService {
	constructor() {}

	async create(data) {
		try {
			const newTerminal = { data };
			return newTerminal;
		} catch (error) {
			throw boom.badRequest("Error creating Terminal");
		}
	}

	async findAll() {
		return [];
	}

	async findOne(id) {
		return {
			id,
			terminal: "Terminal encontrado",
		};
	}

	async update(id, changes) {
		// const
		return {
			id,
			message: "Terminal updated",
		};
	}

	async delete(id) {
		return {
			id,
			message: "Terminal deleted",
		};
	}
}

module.exports = TerminalService;
