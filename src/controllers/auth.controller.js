import * as authService from '../services/auth.service.js'; // Nota el .js al final

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email y contraseña requeridos' });
        }

        const user = await authService.login(email, password);

        res.status(200).json({ 
            message: 'Inicio de sesión exitoso',
            user: { name: user.name, email: user.email }
        });
    } catch (error) {
        res.status(401).json({ message: 'Credenciales inválidas' });
    }
};