import courtService from "../services/court.service.js"
import wrapRoutes from "../utils/wrapRoutes.js"

class CourtController {
    constructor(service) {
        this.service = service
    }
    // aca se declaran los nuevos metodos


    
}

export default wrapRoutes(new CourtController(courtService))