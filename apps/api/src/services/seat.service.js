const boom = require("@hapi/boom");

class SeatService{
    constructor(){}

    async create(data){
        try {
            const newSeat = {data};
            return newSeat; 
        } catch (error) {
            throw boom.badRequest("Error creating Seat"); 
        }
    }

    async findAll(){
        return []; 
    }

    async findOne(id){
        return{
            id,
            asiento: "Asiento encontrado",
        };
    }

    async update(id, changes){
        return{
            id,
            message: "Asiento actualizado"
        }
    }
}

module.exports = SeatService; 