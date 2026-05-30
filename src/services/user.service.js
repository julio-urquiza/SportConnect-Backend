import { body } from "express-validator"
import usuarioDao from "../daos/mongoDB/usuario-dao.js"
import { createHash, isValidPassword } from "../utils/user-bcrypt.js"
import CustomError from "../utils/customError.js"
import { generateToken } from "../utils/jwt.js"

class UserService {
    constructor(dao){
        this.dao = dao
    }

    registerUser = async (body) => {
        const { name, surname, email, password, role } = body
        const hashedPassword = createHash(password)
        const retorno = await this.dao.create({ name, surname, email, password: hashedPassword, role })
        return retorno
    }

    loginUser = async (body) => {
        const {email, password} = body
        const user= await this.dao.getByEmail(email)
        if(!user){
                throw new CustomError("No se encontro un usuario que coincida con esas credenciales", 401)    
        } else {
            if(!isValidPassword(password, user.password)){
                throw new CustomError("No se encontro un usuario que coincida con esas credenciales", 401)    
         } else {
                const token= generateToken({_id:user._id, rol:user.role})
                const { password, ...userSinPassword } = user.toObject()
                return { user: userSinPassword, token }
         }
        }
    }

}    

export default new UserService(usuarioDao)

