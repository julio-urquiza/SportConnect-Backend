// src/routes/user.js
import { Router } from 'express';
// Importamos el controlador (no olvides poner el .js al final)
import { registerUser } from '../controllers/user.controller.js';

const router = Router();

// Cuando alguien haga un POST a /register, el controlador 'registerUser' se encarga
router.post('/register', registerUser);

router.get('/user',(req,res)=> res.status(201).json({test:"ok"}))

export default router;