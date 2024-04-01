const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class JourneyService {
	constructor() {}

	async create(data) {
		return await models.Journey.create({
			...data,
			status: "scheduled",
		});
	}

	async getSeats(id) {
		const journey = await models.Journey.findByPk(id, {
			include: [
				{
					model: models.Vehicle,
					as: "vehicle",
					include: "seats",
				},
			],
		});

		if (!journey) {
			throw boom.notFound("Journey Seats not found");
		}

		return journey;
	}

	async reservation(id, data) {
		// create reservation
		const reservation = await models.Reservation.create({
			userId: data.userId,
			journeyId: parseInt(id),
			status: "pending",
			paymentId: 1,
		});

		// create tickets
		const tickets = data.tickets.map((ticket) => ({
			reservationId: reservation.id,
			...ticket,
		}));

		await models.Ticket.bulkCreate(tickets);

		// update seats
		const seatIds = data.tickets.map((ticket) => ticket.seatId);
		await models.Seat.update(
			{ status: "ocupado" },
			{
				where: {
					id: seatIds,
				},
			}
		);

		return reservation;
	}

	async findAll() {
		return await models.Journey.findAll({
			include: [
				{
					model: models.Vehicle,
					as: "vehicle",
					include: "seats",
				},
				"driver",
				"terminalStart",
				"terminalEnd",
				"reservations",
			],
		});
	}

	async findOne(id) {
		const journey = await models.Journey.findByPk(id, {
			include: ["reservations"],
		});

		if (!journey) {
			throw boom.notFound("Journey not found");
		}

		return journey;
	}

	async findOneWithRelations(id) {
		const journey = await models.Journey.findByPk(id, {
			include: [
				"vehicle",
				"driver",
				"terminalStart",
				"terminalEnd",
				"reservations",
			],
		});

		if (!journey) {
			throw boom.notFound("Journey not found");
		}

		return journey;
	}

	async update(id, changes) {
		const journey = await this.findOne(id);

		const updatedJourney = await journey.update(changes);

		return updatedJourney;
	}

	async delete(id) {
		const journey = this.findOne(id);

		await journey.destroy();

		return journey;
	}
	async setStart(id, startDate) {
		const journey = this.findOne(id);
		journey.departureDate = startDate;
		(await journey).save();
		return journey;
	}
}

module.exports = JourneyService;
