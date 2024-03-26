const boom = require("@hapi/boom");

// const bcrypt = require('bcrypt');
class TicketService {
	constructor() {}

	async create(data) {
		const newTicket = data;
		return newTicket;
	}

	async findAll() {
		return [];
	}

	async findOne(id) {
		return {
			id,
			ticket: "ticket encontrado",
		};
	}

	async update(id, changes) {
		// const
		return {
			id,
			message: "user updated",
		};
	}

	async delete(id) {
		return {
			id,
			message: "user deleted",
		};
	}
}

module.exports = TicketService;
