var express = require("express");
const productRouter = express.Router();
let Product = require("../Models/Product");

// get Product
productRouter.get("/getAllProducts", (req, res) => {
  Product.find({}, (error, data) => {
    res.json(data);
  });
});

module.exports = productRouter;
