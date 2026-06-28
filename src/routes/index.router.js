import { Router } from "express"
import userRouter from './user.router.js'
import courtRouter from './court.router.js'
import reservaRouter from './reserva.router.js'
import errorMiddleware from "../middlewares/errorMiddleware.js"

const router = Router()

router.use('/user',userRouter)
router.use('/reserva',reservaRouter)
router.use('/court',courtRouter)
router.use(errorMiddleware)

export default router