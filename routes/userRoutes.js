const express = require('express');
const route = express.Router();
const {test, userRegister, userLogin} = require('../controllers/userController');

route.get('/test', test);
route.post('/register', userRegister);
route.get('/login', userLogin);



module.exports = route;