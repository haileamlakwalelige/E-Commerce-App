const express = require('express');
const data = require('./data.js');
const dotenv= require('dotenv').config();

const app = express();

app.get('/api/products', (req, res)=>{
    res.send(data.products)
})

const PORT = process.env.PORT || 7000;

app.listen(PORT, ()=>{
    console.log(`server is running in port ${PORT}`)
});
