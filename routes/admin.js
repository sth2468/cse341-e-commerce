const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title, price: req.body.price, description: req.body.description });
  res.redirect('/');
});

// /admin/delete-product => POST
router.post('/delete-product', (req, res, next) => {
  const index = products.findIndex(book => book.title === req.body.title);
  products.splice(index, 1);
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
