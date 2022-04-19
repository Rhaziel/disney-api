const express = require('express');
const { loginAction, registerAction } = require('../controllers/userController');
const userRoutes = express.Router();

userRoutes.post('/login', (req, res) => {
    return loginAction(req, res);
});

//Create
userRoutes.post('/register', (req, res) => {
    return registerAction(req, res);
})


module.exports =  userRoutes;