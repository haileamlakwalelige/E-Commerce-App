const express = require('express');
const data = require('./data.js');
const dotenv = require('dotenv').config();
const cors = require('cors');
// import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api/products', (req, res) => {
  res.send(data.products);
});
app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found!' });
  }
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server is running in port ${PORT}`);
});
