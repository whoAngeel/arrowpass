const boom  = require("@hapi/boom"); 

class VehicleService{
    constructor(){}

    async create(data){
        const newVehicle = data; 
        return newVehicle;
    }

    async findAll() {
		return [];
	}

	async findOne(id) {
		return {
			id,
			ticket: "Autobus encontrado",
		};
	}

	async update(id, changes) {
		// const
		return {
			id,
			message: "Autobus actualizado",
		};
	}

	async delete(id) {
		return {
			id,
			message: "Autobus Eliminado",
		};
	}
}

module.exports = VehicleService;