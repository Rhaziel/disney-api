const express = require('express');
const { createCharacterAction, getCharacterAction, updateCharacterAction, getCharactersAction} = require('../controllers/characterController');
const characterRoutes = express.Router();

characterRoutes.get('/characters', (req, res) => {
    return getCharactersAction(req, res)
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