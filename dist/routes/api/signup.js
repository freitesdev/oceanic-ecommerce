const router = require("express").Router();
const bcrypt = require('bcrypt');

//User Model
const User = require('../../models/user.model')

router.route("/:email").post((req, res) => {
    const name = req.body.name
    const pass = req.body.pass
    const email = req.body.email
    const phone = req.body.phone
    const address = req.body.address
    const newUser = new User({
        name,
        pass,
        email,
        phone,
        address
    })
    // User.findOne(req.body.email)
    //     .then(user => res.json(user))
    //     .catch(err => res.status(400).json({ success: false, error: err }));
    bcrypt.hash(pass, 10)
        .then((hash) => {

        })
        .catch (err => res.status(400).json({ success: false, error: err }));

});

module.exports = router;