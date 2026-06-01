import { body } from "express-validator"
import usuarioDao from "../daos/mongoDB/usuario-dao.js"
import { createHash, isValidPassword } from "../utils/user-bcrypt.js"

class UserService {
    constructor(dao){
        this.dao = dao
    }

    registerUser = async (body) => {
        const {email, password, role } = body
        const hashedPassword = createHash(password)
        const retorno = await this.dao.create({email, password: hashedPassword, role })
        return retorno
    }

    loginUser = async (body) => {
        const {email, password} = body
    
    // 1. Buscamos al usuario usando tu DAO (Asegúrate de que exista getByEmail o el método que uses)
        const user = await this.dao.getByEmail(email) 
        
        if (!user) {
            throw new Error("Credenciales inválidas")
        }

        // 2. Comparamos la contraseña plana con el hash de la BD
        const isMatch = isValidPassword(password, user.password)
        
        if (!isMatch) {
            throw new Error("Credenciales inválidas")
        }

        // 3. Si todo coincide, simplemente devolvemos el usuario encontrado
        return user
    }

}    

export default new UserService(usuarioDao)

