var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/testing", function (req, res, next) {
  res.json({
    name: "John Doe",
    age: 30,
    tech: ["JavaScript", "Node.js", "Express"],
  });
});

module.exports = router;
