var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var burgerObject = {
      burgers: data
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});

router.post("/", function(req, res) {
  burger.create(, [
    req.body.name, req.body.sleepy
  ], function() {
    res.redirect("/");
  });
});

router.put("devour/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    sleepy: req.body.sleepy
  }, condition, function() {
    res.redirect("/");
  });
});
