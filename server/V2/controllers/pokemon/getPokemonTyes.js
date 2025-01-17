const Pokemon = require('../../../models/pokemonModel');
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

module.exports = getPokemonByType