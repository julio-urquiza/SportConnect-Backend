import reserveDao from "../daos/mongoDB/reserve.dao.js";
import CustomError from "../utils/customError.js";

class ReserveService{
    constructor(dao){
        this.dao=dao;
    }
    cancelarReserva= async(idReserva) => {
        if(!idReserva) throw new CustomError(400, "No se recibio la informacion")
        const reserva= await this.dao.getById(idReserva)
        if(!reserva) throw new CustomError(404, "No se encontro una reserva con esa información")
        return await this.dao.cancelarReserva(idReserva)
    }

}

export default new ReserveService(reserveDao)