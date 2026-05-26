import { Router } from "express"
import userController from "../controllers/user.controller.js"
import errorMiddleware from "../middlewares/errorMiddleware.js"
import registerValidation from "../middlewares/registerValidator.js"
import validationMiddleware from "../middlewares/validationMiddleware.js"

const router = Router()

router.post("/register", registerValidation, validationMiddleware, userController.register)
// router.post("/login", userController.login)
// router.post("/current", userController.current)
router.use(errorMiddleware)

export default router