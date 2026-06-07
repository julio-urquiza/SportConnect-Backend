import courtService from "../services/court.service.js"
import wrapRoutes from "../utils/wrapRoutes.js"

class CourtController {
    constructor(service) {
        this.service = service
    }
    // aca se declaran los nuevos metodos
    getCourts = async (req, res) => {
        const courts = await this.service.getCourts()
        res.status(200).json({ courts })
    }
}

export default wrapRoutes(new CourtController(courtService))