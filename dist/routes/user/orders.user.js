const router = require("express").Router();
let Order = require('../../models/order.model');

router.route("/add").post((req, res) => {
    const
        user = req.body.user,
        items = req.body.items,
        total = req.body.total,
        status = req.body.status,
        address = req.body.address,
        date = req.body.date
    const newOrder = new Order({
        user,
        items,
        total,
        status,
        address,
        date
    });
    newOrder.save()
        .then(() => res.json({
            success: true,
            description: 'New Order added'
        }))
        .catch(err => res.status(400).json({ success: false, error: err }));
})
router.route("/:email").get((req, res) => {
    Order.find(req.params.email)
})

module.exports = router;