import userService from "../services/user.service.js"
import wrapRoutes from "../utils/wrapRoutes.js"

class UserController {
    constructor(service) {
        this.service = service
    }

    register = async (req, res) => {
        const user = await this.service.registerUser(req.body)
        res.status(201).json({ ...user })
    }

    login = async (req, res) => {
        const user = await this.service.loginUser(req.body)
        res.status(201).json({ ...user })
    }

    current = async (req, res) => {
        // const {user} = req
        // res.status(201).json({ message: "token validated successfully", user })
    }
}

export default wrapRoutes(new UserController(userService))