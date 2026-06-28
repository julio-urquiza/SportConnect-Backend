import reservaDao from "../daos/mongoDB/reserva.dao.js"
import CustomError from "../utils/customError.js"

class ReservaService {
    constructor(dao) {
        this.dao = dao
    }

    getReservasByUsuario = async (usuarioId) => {
        const reservas = await this.dao.getByUsuario(usuarioId)
        if (!reservas) throw new CustomError(400, "No se pudieron obtener las reservas")
        return reservas
    }
}

export default new ReservaService(reservaDao)
