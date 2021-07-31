const mongoose = require("mongoose");
let Product = new mongoose.Schema(
  {
    SerialNumber: {
      type: String,
      unique: true,
    },
    Name: {
      type: String,
    },
    Price: {
      type: Number,
    },
    Category: {
      type: String,
    },
    Description: {
      type: String,
    },
    imgUrl: {
      type: String,
    },
    userEmail: {
      type: String,
    },
  },
  {
    collection: "products",
  }
);

module.exports = mongoose.model("products", Product);
