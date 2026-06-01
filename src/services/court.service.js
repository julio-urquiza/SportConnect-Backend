import { body } from "express-validator"
import courtDao from "../daos/mongoDB/court.dao.js"
import CustomError from "../utils/customError.js"
import 'dotenv/config'

class CourtService {
    constructor(dao) {
        this.dao = dao
    }
    // declare aqui los nuevos metodos
    
    filtrarPorUbicacion= async(ubicacion) =>{

        const canchas= await this.dao.getByUbicacion(ubicacion)
        if (!canchas) throw new CustomError ("No se encontraron canchas en esa ubicacion",404)
        return canchas
    }


}

export default new CourtService(courtDao)