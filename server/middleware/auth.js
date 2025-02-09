const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    if(!req.headers.authorization){
        return res.status(401).json({message: "Token Required"});
    }
    if (req.headers.authorization?.startsWith('Bearer')) {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token){
            return res.status(401).json({ message: 'Token Required' });
        }
        try {
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            req.user = decoded;
            next();
        }
        catch (err) {
            res.status(401).json({ msg: 'Invalid Token' });
        }
    }
}

module.exports = auth