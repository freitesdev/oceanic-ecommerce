const router = require('express').Router();

// Products Model Require
let Product = require('../../models/product.model')

// Route GET api/products
// GET all products
// access PRIVATE
router.route('/').get((req, res) => {
    Product.find()
        .sort({ date: -1 })
        .then(product => res.json(product))
        .catch(err => res.status(400).json({ success: false, error: err }));
});
router.route('/:id').get((req, res) => {
Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.status(400).json({ success: false, error: err }));
});
router.route('/add').post((req, res) => {
    const name = req.body.name, description = req.body.description, price = Number(req.body.price), category = req.body.category, capacity = req.body.capacity, image = req.body.image, date = Date.parse(new Date());
    const newProduct = new Product({
        description,
        name,
        price,
        category,
        capacity,
        image,
        date
    });
    newProduct.save()
        .then(() => res.json({
            success: true,
            description: 'New product added'
        }))
        .catch (err => res.status(400).json({ success: false, error: err }));
});
router.route('/:id').delete((req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(() => res.json({
            success: true,
            description: "product erased"
        }))
        .catch(err => res.status(404).json({ success: false, error: err }));
});
router.route('/update/:id').post((req, res) => {
    Product.findByIdAndUpdate(req.params.id)
        .then(product => {
            product.name = req.body.name;
            product.description = req.body.description;
            product.price = req.body.price;
            product.category = req.body.capacity;
            product.image = req.body.image;

            product.save()
                .then(() => res.json({
                    success: true,
                    description: 'Product updated'
                }))
                .catch(err => res.status(404).json({ success: false, error: "save operation fails: " + err }));
        })
        .catch(err => res.status(404).json({ success: false, error: "update operation fails: " + err }));
})

module.exports = router;