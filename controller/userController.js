const User = require("../model/userModel");

async function createUserController(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const data = {
    name,
    email,
    password,
  };

  const user = new User(data);
  await user.save();
  res.status(201).json({
    message: "User Created",
    user: user,
  });
}

module.exports = {
  createUserController,
};
