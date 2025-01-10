const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

PORT = process.env.PORT || 4000;
const DbConnect = require('./DB/db');
const pokemonRoutes = require('./routes/pokemonRoutes')


try {
    DbConnect
}
catch (error) {
    console.log(error);
}

app.use(express.json());
app.use('/pokemon', pokemonRoutes);
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});