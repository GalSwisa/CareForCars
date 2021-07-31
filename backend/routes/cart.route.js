var express = require("express");
var router = express.Router();
let cartProduct = require("../Models/Cart");

router.get("/getCart", (req, res) => {
  cartProduct.find({}, (error, data) => {
    res.json(data);
  });
});
router.get("/getCart/:userEmail", (req, res) => {
  cartProduct.find({ userEmail: req.params.userEmail }, (error, data) => {
    res.json(data);
  });
});
router.get("/getSpecificCartItem/:SerialNumber", (req, res) => {
  cartProduct.find({ SerialNumber: req.params.SerialNumber }, (error, data) => {
    res.json(data);
  });
});
router.post("/addToCart", (req, res) => {
  cartProduct.create(req.body, (error, data) => {
    console.log(req.body);
    console.log(error);
    res.json(data);
  });
});
router.put("/updateCartItem/:SerialNumber", (req, res) => {
  cartProduct.updateOne(
    { SerialNumber: req.params.SerialNumber },
    { $set: req.body },
    (error, data) => {
      res.json(data);
    }
  );
});
router.delete("/deleteCartItem/:SerialNumber", (req, res) => {
  cartProduct.findOneAndRemove(
    { SerialNumber: req.params.SerialNumber },
    (error, data) => {
      console.log("You have removed:");
      console.log(data);
    }
  );
});
module.exports = router;
