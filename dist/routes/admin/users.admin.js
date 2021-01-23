const router = require('express').Router();
//Order Model Require
let User = require('../../models/user.model')
// Route GET admin/users
// GET all users
// access PRIVATE
router.route('/').get((req, res) => {
    User.find()
        .sort({ date: -1 })
        .then(products => res.json(products))
        .catch(err => res.status(400).json({ success: false, error: err }));
});
router.route('/active').get((req, res) => {

});
router.route('/inactive').get((req, res) => {

});
router.route('/banned').get((req, res) => {

})
router.route('/ban/:id').post((req, res) => {

})
module.exports = router;