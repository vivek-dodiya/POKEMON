const express = require('express');
const route = express.Router();
const {test, getAllPokemon,getPokemonByname} = require('../controllers/pokemonController');

route.get('/test',test);
route.get('/pokemons', getAllPokemon);
route.get('/pokemons/:name',getPokemonByname);

module.exports = route