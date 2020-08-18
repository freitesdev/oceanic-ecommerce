const router = require('express').Router();

// Products Model Require
const Product = require('../../models/product.model')

// Route GET api/products
// GET all products
// access PUBLIC
router.route('/products').get((req, res) => {
    Product.find()
        .sort({ date: -1 })
        .then(products => res.json(products))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports= router;