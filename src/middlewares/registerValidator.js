import { body } from "express-validator"

const registerValidation = [
    body("name")
        .notEmpty().withMessage("El nombre es obligatorio")
        .isLength({ min: 3 }),

    body("name")
        .notEmpty().withMessage("El apellido es obligatorio")
        .isLength({ min: 3 }),

    body("email")
        .notEmpty().withMessage("El email es obligatorio")
        .isEmail()
        .normalizeEmail(),

    body("password")
        .notEmpty().withMessage("La contraseña es obligatorio")
        .isLength({ min: 8 }),

    body("rol")
        .notEmpty().withMessage("El rol es obligatorio")
        .isIn(["user", "owner"])
]
export default registerValidation