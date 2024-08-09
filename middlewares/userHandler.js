const User = require("../models/userModel");

// Playload data verification fro signup API
exports.verifySignupPayLoad = (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All field are required..!" });
  }
  next();
};

// Payload data verfification for login API
exports.verifyLoginPayload = (req, res, next) => {
  const { userName, password } = req.body;
  if (!userName || !password) {
    return res.status(400).json({ message: "All fields are required" });
  } else {
    next();
  }
};

// Signup Handler
exports.SignupHandler = async (req, res, next) => {
  const { username, email } = req.body;
  const existingUser = await User.findOne({ userName: username });
  if (existingUser) {
    return res.status(400).json({ message: "User name already exists" });
  }
  const existingEmail = await User.findOne({ email: email });
  if (existingEmail) {
    return res.status(200).json({ message: "Email already exists" });
  }
  next();
};

// login handler
exports.LoginHandler = async (req, res, next) => {
  const { userName } = req.body;
  try {
    const user = await User.findOne({ userName }).lean();
    if (user) {
      req.user = user;
      next();
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};