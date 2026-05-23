// src/controllers/user.controller.js

export const registerUser = (req, res) => {
    // 1. Recibir datos del usuario
    const { name, email, password } = req.body;

    // 2. Validar input básico
    if (!name || !email || !password) {
        return res.status(400).json({ 
            error: "Faltan datos obligatorios. Revisa el nombre, email y contraseña." 
        });
    }

    // Si todo está bien, respondemos con éxito
    return res.status(201).json({
        message: "Datos validados correctamente",
        user: { name, email, password }
    });
};

/*Ejemplo usado:
//{
    "name": "Rocio",
    "email": "rocio@test.com",
    "password": "123"
}*/