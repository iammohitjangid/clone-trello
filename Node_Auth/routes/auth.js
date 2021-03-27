const router = require("express").Router();
const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const { registerValidation, loginValidation } = require("../validation");

// Register New User
router.post("/register", async (req, res) => {
  // Validate the data
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Checking if the user is already in the data base
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email is already Exists");

  // Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Create New User
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user.id });
  } catch (err) {
    res.status(400).send("err");
  }
});

// Sign In Existing User
router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Checking if the Email is already exist in the data base
  const emailExist = await User.findOne({ email: req.body.email });
  if (!emailExist) return res.status(400).send("Email Not Found");

  // Password Checking
  const validPass = await bcrypt.compare(req.body.password, emailExist.password);
  if (!validPass) return res.status(400).send("Invalid Password");
  res.send("Logged in");
}); 

module.exports = router;
