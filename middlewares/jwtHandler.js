const jwt = require("jsonwebtoken");
let token = "";
let secret = process.env.SECRET;

exports.generateToken = (userData) => {
  return (token = jwt.sign({ userData }, secret));
};

exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  try {
    const decode = jwt.verify(token, secret);
    req.userData = decode.userData;
    next();
  } catch (error) {
    res.status(400).json({message:"Token is not valid"})
  }
};