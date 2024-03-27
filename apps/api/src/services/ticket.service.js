const boom = require("@hapi/boom");

class TicketService {
	constructor() {}

	async create(data) {
		try {
			const newTicket = { data };
			return newTicket;
		} catch (error) {
			throw boom.badRequest("Error creating ticket");
		}
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
			message: "Ticket updated",
		};
	}

	async delete(id) {
		return {
			id,
			message: "Ticket deleted",
		};
	}
}

module.exports = TicketService;
