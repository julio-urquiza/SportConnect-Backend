import { body } from "express-validator"
import usuarioDao from "../daos/mongoDB/usuario-dao.js"
import { createHash, isValidPassword } from "../utils/user-bcrypt.js"
import CustomError from "../utils/customError.js"

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
        const {email, password} = body
        const usuario= await usuarioDao.getByEmail(email)

        if(!usuario){
                throw new CustomError("No se encontro un usuario que coincida con esas credenciales", 401)    
        } else {
            if(!isValidPassword(password, usuario.password)){
                throw new CustomError("No se encontro un usuario que coincida con esas credenciales", 401)    
         } else {
                return usuario;
         }
        }
    }

}    

export default new UserService(usuarioDao)

