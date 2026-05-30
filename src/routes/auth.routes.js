import express from 'express';
import { login } from '../controllers/auth.controller.js'; // Importación nombrada

const router = express.Router();

router.post('/login', login);

export default router; // Exportación por defecto para que app.js lo reconozca