const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
    id: { 
        type: Number, 
        required: true 
    },
    name: {
        english: {
            type: String,
            required: true
        },
        japanese: {
            type: String
        },
        chinese: {
            type: String
        },
        french: {
            type: String
        },
    },
    type: [
        {
            type: String
        }
    ],
    base: {
        HP: {
            type: Number,
            required: true
        },
        Attack: {
            type: Number,
            required: true
        },
        Defense: {
            type: Number,
            required: true
        },
        "Sp. Attack": {
            type: Number,
            required: true
        },
        "Sp. Defense": {
            type: Number,
            required: true
        },
        Speed: {
            type: Number,
            required: true
        },
    },
    species: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    evolution: {
        next: [
            [
                { type: String }
            ]
        ],
    },
    profile: {
        height: {
            type: String
        },
        weight: {
            type: String
        },
        egg: [
            {
                type: String
            }
        ],
        ability: [
            [
                { type: String }
            ]
        ],
        gender: {
            type: String
        },
    },
    image: {
        sprite: {
            type: String
        },
        thumbnail: {
            type: String
        },
        hires: {
            type: String
        },
    },
});
module.exports = mongoose.model("pokemon", pokemonSchema);