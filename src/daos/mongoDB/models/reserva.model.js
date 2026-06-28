import mongoose from "mongoose";

const reservaSchema = new mongoose.Schema(
    {
        usuario: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users",
            required: true,
        },
        cancha: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Courts",
            required: true,
        },
        fechaInicio: {
            type: Date,
            required: true,
        },
        fechaFin: {
            type: Date,
            required: true,
        },
        estado: {
            type: String,
            enum: ["pendiente", "confirmada", "cancelada"],
            default: "pendiente",
        },
    },
    { timestamps: true },
);

export default mongoose.model("Reservas", reservaSchema);
