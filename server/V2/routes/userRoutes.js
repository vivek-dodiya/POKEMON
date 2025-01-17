const express = require('express');
const userRoute = express.Router();
const userRegister = require('../controllers/users/userRegister');
const userLogin = require('../controllers/users/userLogin');

userRoute.post('/register', userRegister);
userRoute.get('/login', userLogin);



module.exports = userRoute;