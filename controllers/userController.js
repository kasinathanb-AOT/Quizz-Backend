const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const { generateToken } = require("../middlewares/jwtHandler");

// User signup
exports.userSignUp = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = new User({ userName: username, email, password });
    await newUser.save();

    const authToken = generateToken(username);
    return res.status(200).json({ message: "SignUp Successfully", authToken });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// User login
exports.userLogin = async (req, res) => {
  const { password } = req.body;
  const { user } = req;

  try {
    if (user.password !== password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const authToken = generateToken(user.userName);
    return res.status(200).json({ authToken });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ score: -1 });

    if (!users.length) {
      return res.status(404).json({ message: "No users found" });
    }

    return res.status(200).json(users);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
};

// Update user score
exports.updateScore = async (req, res) => {
  const { userName, score } = req.body;

  try {
    const user = await User.findOne({ userName });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.score += score;
    await user.save();

    return res.status(200).json({ message: "Score updated successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error updating score", error: error.message });
  }
};
