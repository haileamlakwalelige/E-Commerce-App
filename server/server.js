const express = require('express');
const data = require('./data.js');
const dotenv= require('dotenv').config();
const cors = require('cors');
// import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api/products', (req, res)=>{
    res.send(data.products)
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
    console.log(`server is running in port ${PORT}`)
});
