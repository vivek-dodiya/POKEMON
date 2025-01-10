const Pokemon = require('../models/pokemonModel')

const test = (req, res) => {
    res.status(200).json({ message: "Pokemon Route Work Propperly" });
};

// pokemon/pokemons
const getAllPokemon = async (req, res) => {
    try {
        const { page = 1, limit = 12 } = req.query;
        const skip = (page - 1) * limit;
        const total = await Pokemon.find().countDocuments();
        const pokemons = await Pokemon.find().skip(skip).limit(limit);
        res.status(200).json({ pokemons, total });
    }
    catch (error) {
        res.status(404).json({ message: "Error fetching Pokemon" });
    }
};

// pokemon/pokemons/:name
const getPokemonByname = async (req, res) => {
    try {
        const name = req.params.name;
        const pokemon = await Pokemon.find({ 'name.english': name }); // 'name.english': { $regex: new RegExp(name, 'i') ;
        if (pokemon.length === 0) {
            return res.status(404).json({ message: "Pokemon not found" })
        }
        const total = await Pokemon.find().countDocuments();
        res.status(200).json({ pokemon , total });
    }
    catch (error) {
        res.status(404).json({ message: "Error fetching Pokemon", err: error.message });
    }
};



module.exports = {
    test,
    getAllPokemon,
    getPokemonByname
};
