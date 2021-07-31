const mongoose = require("mongoose");
let Cart = new mongoose.Schema(
  {
    SerialNumber: {
      type: String,
      unique: true,
    },
    Description: {
      type: String,
    },
    Name: {
      type: String,
    },
    Price: {
      type: Number,
    },
    Amount: {
      type: Number,
    },
    Category: {
      type: String,
    },
    Number: {
      type: Number,
    },
    imgUrl: {
      type: String,
    },
    userEmail: {
      type: String,
    },
  },
  {
    collection: "cart",
  }
);

module.exports = mongoose.model("cart", Cart);
