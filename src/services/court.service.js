import courtDao from "../daos/mongoDB/court.dao.js"
import CustomError from "../utils/customError.js"
import 'dotenv/config'

class CourtService {
    constructor(dao) {
        this.dao = dao
    }
    // declare aqui los nuevos metodos
    



}

export default new CourtService(courtDao)