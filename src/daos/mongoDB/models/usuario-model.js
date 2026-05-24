import mongoose from "mongoose"

const UsuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellido: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    rol: {
        type: String,
        enum: ["user", "owner"],
        required: true
    }
})

export const usuarioModel = mongoose.model("Users", UsuarioSchema)