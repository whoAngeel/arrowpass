const boom = require("@hapi/boom");

class DriverService{
    constructor() {}

    async create(data){
        try {
            const newDriver = {
                data
            }
        } catch (error) {
            throw boom.badData("Error creating Driver")
        }
    }

    async findAll(){
        return [];
    }

    async findOne(id){
        return{
            id,
            name: "Ronaldo",
        }
    }

    async update(id, changes){
        return{
            id,
            message: "Conductor actualizado"
        }
    }

    async delete(id){
        return{
            message: "Conductor eliminado"
        }
    }
}

module.exports = DriverService;
