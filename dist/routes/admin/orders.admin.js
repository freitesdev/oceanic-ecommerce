const router = require('express').Router();
//Order Model Require
let Order= require('../../models/order.model')
// Route GET admin/order
// GET all orders
// access PRIVATE
router.route('/').get((req, res) => {
    Order.find()
        .sort({ date: -1 })
        .then(products => res.json(products))
        .catch(err => res.status(400).json({ success: false, error: err }));
});
router.route('/:id').get((req, res) => {
    Order.findById(req.params.id)
        .then(products => res.json(products))
        .catch(err => res.status(400).json({ success: false, error: err }));
});
router.route('/update/:id').post((req, res) => {

});
router.route('/pending').get((req, res) => {

});
router.route('/processed').get((req, res) => {

});
module.exports = router;