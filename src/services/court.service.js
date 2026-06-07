import courtDao from "../daos/mongoDB/court.dao.js"
import CustomError from "../utils/customError.js"
import 'dotenv/config'

class CourtService {
    constructor(dao) {
        this.dao = dao
    }
    // declare aqui los nuevos metodos
        getCourts = async () => {
        const courts = await this.dao.getAll()
        if (!courts) throw new CustomError(400, 'No se pudieron obtener las canchas')
        return courts
    }
}

export default new CourtService(courtDao)