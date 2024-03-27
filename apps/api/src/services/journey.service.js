const boom = require("@hapi/boom");

class JourneyService {
	constructor() {}

	async create(data) {
		try {
			const newJourney = {
				data,
			};
			return newJourney;
		} catch (error) {
			throw boom.badData("Error creating journey");
		}
	}

	async findAll() {
		return [];
	}

	async findOne(id) {
		return {
			id,
			journey: "dfadfa viaje",
		};
	}

	async update(id, changes) {
		return {
			id,
			message: "updated trip",
		};
	}
	async delete(id) {
		return {
			message: "deleted trip",
		};
	}
}

module.exports = JourneyService;
