import reservaService from "../services/reserva.service.js"
import wrapRoutes from "../utils/wrapRoutes.js"

class ReservaController {
  constructor(service) {
    this.service = service
  }

  getReservasByUsuario = async (req, res) => {
    const { _id } = req.user
    const reservas = await this.service.getReservasByUsuario(_id)
    res.status(200).json({ reservas })
  }
}

export default wrapRoutes(new ReservaController(reservaService))