import reservaModel from "./models/reserva.model.js";
import MongoDao from "./mongo.dao.js";

class ReservaDao extends MongoDao {
    constructor(model) {
        super(model);
    }

    getByUsuario = async (usuarioId) => {
        return await this.model
            .find({ usuario: usuarioId })
            .populate("cancha")
            .sort({ fechaInicio: 1 });
    };
}

export default new ReservaDao(reservaModel);
