import { Router } from "express"
import courtController from "../controllers/court.controller.js"
const router = Router()

// declare aqui los nuevos endpoints
router.get("/", (req, res) => {res.send("test court router")}) // endpoint de prueba, eliminar luego
router.get("/search", courtController.filtrarPorUbicacion)

export default router