import User from "../models/user.model.js";

// Fíjate que agregamos 'export' antes de cada constante
export const createUser = async (userData) => {
    return await User.create(userData);
};

export const findByEmail = async (email) => {
    return await User.findOne({ email: email });
};