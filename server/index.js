const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

PORT = process.env.PORT || 4000;
const DbConnect = require('./config/db');
const userRoutes = require('./V2/routes/userRoutes');
const v1PokemonRoutes = require('./V1/routes/v1PokemonRoutes');
const v2PokemonRoutes = require('./V2/routes/v2PokemonRoutes');


try {
    DbConnect
}
catch (error) {
    console.log(error);
};

app.use(express.json());
app.use('/v2/user', userRoutes);
app.use('/v1/pokemon', v1PokemonRoutes);
app.use('/v2/pokemon', v2PokemonRoutes);
app.get('/', (req, res) => {
    res.status(200).json({message :'Hello World!'})
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});