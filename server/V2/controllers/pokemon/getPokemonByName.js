const Pokemon = require('../../../models/pokemonModel');

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

module.exports = getPokemonByname