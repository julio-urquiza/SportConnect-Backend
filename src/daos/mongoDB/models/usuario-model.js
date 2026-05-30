import mongoose from "mongoose"

const UsuarioSchema = new mongoose.Schema({

    name: {
        type: String,
        // required: true,
        trim: true
    },
    surname: {
        type: String,
        // required: true,
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
    role: {
        type: String,
        enum: ["user", "owner"],
        required: true
    }
})

export const usuarioModel = mongoose.model("Users", UsuarioSchema)