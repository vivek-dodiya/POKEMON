const User = require('../../../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
};

module.exports = userLogin