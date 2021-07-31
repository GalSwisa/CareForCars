const mongoose = require("mongoose");
let User = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    collection: "users",
  }
);

module.exports = mongoose.model("users", User);
