import reserveService from "../services/reserve.service.js";
import wrapRoutes from "../utils/wrapRoutes.js";

class ReserveController{
    constructor(service){
        this.service=service
    }

    cancelarReserva = async(req,res) =>{
        const id= req.query.id
        const reserva= await this.service.cancelarReserva(id)
        res.status(200).json({
            estado:"Se cancelo la reserva de la cancha",
            reserva
        })
    }



}

export default wrapRoutes(new ReserveController(reserveService))