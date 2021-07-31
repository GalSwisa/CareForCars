var express = require("express");
var router = express.Router();
let user = require("../Models/User");

router.post("/createUser", (req, res) => {
  user.create(req.body, (error, data) => {
    res.json(data);
  });
});

router.get("/getUser", (req, res) => {
  user.find({}, (error, data) => {
    res.json(data);
  });
});

router.get("/getUser/:userEmail", (req, res) => {
  user.find({ userEmail: req.params.userEmail }, (error, data) => {
    res.json(data);
  });
});
module.exports = router;
