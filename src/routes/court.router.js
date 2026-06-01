import { Router } from "express"

const router = Router()

// declare aqui los nuevos endpoints
router.get("/", (req, res) => {res.send("test court router")}) // endpoint de prueba, eliminar luego

export default router