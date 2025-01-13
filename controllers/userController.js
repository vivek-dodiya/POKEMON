const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Pokemon = require('../models/pokemonModel')

const test = (req, res) => {
    res.send("Hello from user controller");
};

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

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        const passMatch = await bcrypt.compare(password, user.password);
        if (!passMatch) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }
        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
        res.json({ token, message: "Logged in successfully" });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
}



module.exports = {
    test,
    userRegister,
    userLogin,
}