// routes/userRouter.js
const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

const {
  SignupHandler,
  verifySignupPayLoad,
  verifyLoginPayload,
} = require("../middlewares/userHandler");
const { verifyToken } = require("../middlewares/jwtHandler");

// Router for signup
router.post(
  "/signup",
  verifySignupPayLoad,
  SignupHandler,
  UserController.userSignUp
);
// Router for login
router.post(
  "/login",
  verifyLoginPayload,
  UserController.userLogin
);

module.exports = router;
