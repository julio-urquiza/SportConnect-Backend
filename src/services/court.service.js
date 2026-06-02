import courtDao from "../daos/mongoDB/court.dao.js"
import CustomError from "../utils/customError.js"

class CourtService {
    constructor(dao) {
        this.dao = dao
    }
    // declare aqui los nuevos metodos
    
    filtrarPorUbicacion= async(ubicacion) =>{
        if(!ubicacion || ubicacion.trim() == "") throw new CustomError(404, "No se recibio ninguna ubicacion")
        const canchas= await this.dao.getByUbicacion(ubicacion)


        if (canchas.length === 0) throw new CustomError (404, "No se encontraron canchas en esa ubicacion")
        return canchas
    }


}

export default new CourtService(courtDao)