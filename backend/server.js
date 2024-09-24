const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 7000; 

app.use(express.json())
app.get('/api/youtube', (_, res) => {
    res.send({
        msg: 'hello les putes'
    })
})

app.listen(PORT, () => {
    console.log(`Le serveur est lancé sur le port : ${PORT}`)

});