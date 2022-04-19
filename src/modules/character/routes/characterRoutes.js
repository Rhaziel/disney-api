const express = require('express');
const { createCharacterAction, getCharacterAction, updateCharacterAction } = require('../controllers/characterController');
const characterRoutes = express.Router();

characterRoutes.get('/characters', (req, res) => {
    res.send("Prueba");
});

//Create
characterRoutes.post('/character', (req, res) => {
    return createCharacterAction(req, res);
})

//Read
characterRoutes.get('/character/:id', (req, res) => {
    return getCharacterAction(req,res);
})

//Update
characterRoutes.patch('/character', (req, res) => {
    return updateCharacterAction(req,res);
})

//Delete


module.exports =  characterRoutes;