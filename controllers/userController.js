const JsonWebTokenError = require("jsonwebtoken");
const User = require("../models/userModel");
const { generateToken } = require("../middlewares/jwtHandler");

let authToken = "";

// User singup
exports.userSignUp = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = new User({
      userName: username,
      email: email,
      password: password,
    });

    await newUser.save();
    const authToken = generateToken(username);
    return res.status(200).json({ message: "SignUp Successfully", authToken });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server error" });
  }
};

// User login
exports.userLogin = async (req, res) => {
  const { userName, password } = req.body;
  if (userName && password) {
    try {
      const user = await User.findOne({ userName: userName });
      if (user) {
        if (user.password === password) {
          authToken = generateToken(userName);
          return res.status(200).json({ message: authToken });
        } else {
          return res.status(500).json({ message: "Incorrect password" });
        }
      } else {
        return res.status(408).json({ message: "No user found" });
      }
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
