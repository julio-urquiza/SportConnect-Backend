import bcrypt from 'bcrypt';
// IMPORTANTE: Como usaste 'export const', usamos llaves {}
import { findByEmail } from '../daos/user.dao.js'; 

export const login = async (email, passwordIngresada) => {
    // 1. Buscar al usuario usando la función importada
    const user = await findByEmail(email);
    if (!user) throw new Error('email o contraseña inválidos');

    // 2. Comparar el hash
    const esValida = await bcrypt.compare(passwordIngresada, user.password);
    
    if (!esValida) throw new Error('email o contraseña inválidos');

    return user; 
};