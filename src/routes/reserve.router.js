import { Router } from "express";
import reserveController from "../controllers/reserve.controller.js";

const router= Router()

router.patch("/cancelar",reserveController.cancelarReserva)

export default router