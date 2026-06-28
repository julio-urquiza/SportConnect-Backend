import { Router } from "express"
import reservaController from "../controllers/reserva.controller.js"
import authMiddleware from "../middlewares/auth.middleware.js"

const router = Router()

router.get("/mis-reservas", authMiddleware, reservaController.getReservasByUsuario)

export default router