const Pokemon = require('../../../models/pokemonModel');
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

module.exports = getAllPokemon