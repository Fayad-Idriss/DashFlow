const express = require('express');
require('dotenv').config();
const bankRoutes = require('./routes/bankRoutes');


const app = express();
const PORT = process.env.PORT || 7000; 



app.use(express.json())

//Code permettant de gérer les erreurs CORS. 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


// Les différents routes de l'application

// Utilisation des routes bancaires
app.use('/api', bankRoutes);



module.exports = app;