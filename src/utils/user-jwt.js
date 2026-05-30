import jwt from "jsonwebtoken"

const generateToken = (user, clave, expires) => {
    const payload = {
        _id: user._id,
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + expires,
        email: user.email,
        role: user.role
    }
    return jwt.sign(payload, clave, {expiresIn: `${expires}m`})
}

export default generateToken