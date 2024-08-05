const User = require("../models/userModel");

// Playload data verification
exports.verifySignupPayLoad = (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All field are required..!" });
  }
  next();
};

exports.verifyLoginPayload = (req, res, next) => {
  const { username, password } = req.body;
  if (username && password) {
    next();
  } else {
    return res.status(400).json({ message: "All fields are required" });
  }
};

// Signup Handler
exports.SignupHandler = async (req, res, next) => {
  const { username, email } = req.body;
  // Checking for the existing user name
  const existingUser = await User.findOne({ userName: username });
  if (existingUser) {
    return res.status(400).json({ message: "User name already exists" });
  }
  // Checking for the existing user email
  const existingEmail = await User.findOne({ email: email });
  if (existingEmail) {
    return res.status(200).json({ message: "Email already exists" });
  }
  next();
};

// login handler
exports.UserLoginHandler = async () => {};
