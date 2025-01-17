const User = require('../../../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userRegister = async (req, res) => {
    try {
        const { name, email, password, age } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            age
        });
        res.status(201).json({ user, message: "user Created sucessfully" });
    } catch (err) {
        res.status(400).json({ msg: err.message, message: "user not create" });
    }
};

module.exports = userRegister