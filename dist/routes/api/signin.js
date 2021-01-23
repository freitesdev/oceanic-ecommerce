const router = require('express').Router();
const bcrypt = require('bcrypt');

// Users Model Require
const User = require('../../models/user.model')

router.route('/:email').post((req, res) => {
    User.findOne()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;