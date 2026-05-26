import { body } from "express-validator"
import usuarioDao from "../daos/mongoDB/usuario-dao.js"
import { createHash } from "../utils/user-bcrypt.js"

class UserService {
    constructor(dao){
        this.dao = dao
    }

    registerUser = async (body) => {
        const {nombre, apellido, email, password, rol } = body
        const hashedPassword = createHash(password)
        const retorno = await this.dao.create({nombre, apellido, email, password: hashedPassword, rol })
        return retorno
    }

    loginUser = async (body) => {
        // const {email, password} = body
    }
}    

export default new UserService(usuarioDao)

