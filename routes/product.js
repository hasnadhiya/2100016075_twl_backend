const express = require('express');
const ProductRouter = express.Router();

// Model produk
const Product = require('../models/product');

// Rute GET untuk mendapatkan semua produk
ProductRouter.get('/', (req, res) => {
    res.send('ok');
  try {
    const products = Product.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  } 
});

// Rute GET untuk mendapatkan produk berdasarkan ID
ProductRouter.get('/:id', (req, res) => {
  try {
    const productId = req.params.id;
    const product = Product.getProductById(productId);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

ProductRouter.post('/', (req, res) => {
    try {
      const {name,price} = req.body;
      //const product = Product.createProduct(name, price);
      res.json(req.body);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
})


module.exports = router;
