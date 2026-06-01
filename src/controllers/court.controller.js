import courtService from "../services/court.service.js"
import wrapRoutes from "../utils/wrapRoutes.js"

class CourtController {
    constructor(service) {
        this.service = service
    }
    // aca se declaran los nuevos metodos

    filtrarPorUbicacion = async(req,res) =>{
        const ubicacion=req.query.ubicacion

        const canchas= await this.service.filtrarPorUbicacion(ubicacion)
        res.status(200).json({
            mensaje:"Se encontraron canchas en esa ubicacion", canchas
        })
    }
    
}

export default wrapRoutes(new CourtController(courtService))