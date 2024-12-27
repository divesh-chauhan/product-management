const express = require('express')
const route = express.Router();
const { addProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/productController');

route.post('/', addProduct);
route.get('/', getProducts);
route.put('/:id', updateProduct);
route.delete('/:id', deleteProduct);

module.exports = route;