const express = require('express');
const auth = require('../../middleware/auth');
const getAllPokemon = require('../controllers/pokemon/getAllpokemon');
const getPokemonByType = require('../controllers/pokemon/getPokemonTyes');
const getPokemonByname = require('../controllers/pokemon/getPokemonByName');
const v2PokemonRoutes = express.Router();

v2PokemonRoutes.get('/', auth , getAllPokemon);
v2PokemonRoutes.get('/:type', auth , getPokemonByType);
v2PokemonRoutes.get('/pokemon/:name', auth , getPokemonByname);

module.exports = v2PokemonRoutes;