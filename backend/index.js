const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const PORT = 8000;
const cors = require("cors");
var user = require("./routes/user.route");
var cart = require("./routes/cart.route");
var product = require("./routes/product.route");
//Import the mongoose module
const mongoose = require("mongoose");
//Set up default mongoose connection
var mongoDB = "mongodb://localhost:27017/CareForCars";
mongoose.connect(mongoDB, { useNewUrlParser: true });

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

//app.use(express.static(path.join(__dirname, "dist/CareForCars")));
// Backend routing
app.use(express.static(path.join(__dirname, "dist/CareForCars")));
app.use("/api", user);
app.use("/api", cart);
app.use("/api", product);
// Frontend routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/CareForCars/index.html"));
});
/*app.get("*"
, (req, res) => {
res.sendFile(path.join(__dirname, "dist/CareForCars/index.html"));
});*/
app.listen(PORT, () => console.log("Server started on port ", PORT));

//test
