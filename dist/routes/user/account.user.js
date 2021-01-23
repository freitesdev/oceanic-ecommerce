const router = require("express").Router();

// Account Model Require
const account = require("../../models/user.model");
//GET account info
router.route("/:id").get((req, res) => {
  account.findById(req.params.id)
    .then((account) => res.json(account))
    .catch((err) => res.status(400).json({ success: false, error: err }));
});
//UPDATE account info
router.route("/:id").put((req, res) => {
    account.findOneAndUpdate(req.params.id)
    .then((account) => {
        {
            account.phone = req.body.phone;
            account.address = req.body.address;
        }
      account
        .save()
        .then(() =>
          res.json({
            success: true,
            description: "Info updated",
          })
        )
        .catch((err) =>
          res
            .status(404)
            .json({ success: false, error: "save operation fails: " + err })
        );
    })
    .catch((err) =>
      res
        .status(404)
        .json({ success: false, error: "update operation fails: " + err })
    );
});
module.exports = router;