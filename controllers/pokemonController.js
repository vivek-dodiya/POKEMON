const Pokemon = require('../models/pokemonModel')

const test = (req, res) => {
    res.status(200).json({ message: "Pokemon Route Work Propperly" });
};

// pokemon/pokemons
const getAllPokemon = async (req, res) => {
    try {
        const { page = 1, limit = 12 } = req.query;
        const skip = Number(page - 1) * Number(limit);
        const total = await Pokemon.find().countDocuments();
        const pokemons = await Pokemon.find().skip(skip).limit(Number(limit));
        if (total > page * limit) {
            nextLink = `http://${req.hostname}:${process.env.PORT || 4000
                }/pokemon/pokemons/?page=${Number(page) + 1
                }&limit=${limit}`;
            res.status(200).json({ pokemons, total, nextLink });
        }
    }
    catch (error) {
        res.status(404).json({ message: "Error fetching Pokemon" });
    }
};

// pokemon/pokemon/:name
const getPokemonByname = async (req, res) => {
    try {
        const name = req.params.name;
        const pokemon = await Pokemon.find({ 'name.english': name }); // 'name.english': { $regex: new RegExp(name, 'i') ;
        if (pokemon.length === 0) {
            return res.status(404).json({ message: "Pokemon not found" })
        }
        const total = await Pokemon.find().countDocuments();
        res.status(200).json({ pokemon, total });
    }
    catch (error) {
        res.status(404).json({ message: "Error fetching Pokemon", err: error.message });
    }
};
// pokemon/pokemons/:type
const getPokemonByType = async (req, res) => {
    try {
        const type = req.params.type;
        const pokemons = await Pokemon.find({ type }, { _id: 0, id: 1, 'name.english': 1, type: 1 });
        if (pokemons.length === 0) {
            return res.status(404).json({ message: "Pokemon not found" })
        }
        const total = await Pokemon.find().countDocuments();
        res.status(200).json({ pokemons, total, length: pokemons.length });
    }
    catch (error) {
        res.status(404).json({ message: "Error fetching Pokemon", err: error.message });
    }
};

module.exports = {
    test,
    getAllPokemon,
    getPokemonByname,
    getPokemonByType
};
