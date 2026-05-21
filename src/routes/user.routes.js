import { Router } from "express"
import userController from "../controllers/user.controller.js"
import errorMiddleware from "../moddlewares/errorMiddleware.js"

const router = Router()

router.post("/register", userController.register)
router.use(errorMiddleware)

export default router