var express = require("express");

const {
  createUserController,
  getUserController,
} = require("../controller/userController");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res) {
  res.json({
    message: "User Controller is working",
  });
});
router.post("/create", createUserController);

module.exports = router;
