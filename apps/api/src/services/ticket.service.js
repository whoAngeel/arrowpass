const boom = require("@hapi/boom");

// const bcrypt = require('bcrypt');
class TicketService {
	constructor() {}

	async create(data) {
		const newTicket = { name: "ticket" };
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
		return null;
	}

	async delete(id) {
		return {
			id,
		};
	}
}

module.exports = TicketService;
