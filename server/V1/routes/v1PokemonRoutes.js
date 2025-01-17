const express = require('express');
const v1PokemonRoutes = express.Router();
const getAllPokemon = require('../controllers/getAllPokemon');

v1PokemonRoutes.get('/', getAllPokemon);

module.exports = v1PokemonRoutes;