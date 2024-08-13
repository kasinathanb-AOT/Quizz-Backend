const jwt = require("jsonwebtoken");
let token = "";
let secret = process.env.SECRET;

const options = {
  expiresIn: "10min",
};

// Genreate JWT Token
exports.generateToken = (userData) => {
  return (token = jwt.sign({ userData }, secret, options));
};

// Verify JWT token and check expiration
exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.userData = decoded.userData;
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ message: "Token has expired" });
    }
    return res
      .status(400)
      .json({ message: "Token is not valid", error: error.message });
  }
};