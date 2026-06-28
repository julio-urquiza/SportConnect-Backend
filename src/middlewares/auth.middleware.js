import jwt from "jsonwebtoken"
import CustomError from "../utils/customError.js"
import 'dotenv/config'

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith("Bearer "))
        throw new CustomError(401, "Token no proporcionado")

    const token = authHeader.split(" ")[1]

    try {
        const decoded = jwt.verify(token, process.env.CLAVE_JWT)
        req.user = decoded
        next()
    } catch {
        throw new CustomError(401, "Token inválido o expirado")
    }
}

export default authMiddleware