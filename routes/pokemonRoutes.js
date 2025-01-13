const express = require('express');
const route = express.Router();
const auth = require('../middleware/auth')
const {test, getAllPokemon,getPokemonByname,getPokemonByType} = require('../controllers/pokemonController');

route.get('/test',test);
route.get('/pokemons',auth, getAllPokemon);
route.get('/pokemon/:name',auth,getPokemonByname);
route.get('/pokemons/:type', auth, getPokemonByType);

module.exports = route