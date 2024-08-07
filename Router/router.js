// routes/userRouter.js
const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const { verifyToken } = require("../middlewares/jwtHandler");

const {
  SignupHandler,
  verifySignupPayLoad,
  verifyLoginPayload,
} = require("../middlewares/userHandler");

// Router for signup
router.post(
  "/signup",
  verifySignupPayLoad,
  SignupHandler,
  UserController.userSignUp
);
// Router for loginx
router.post("/login", verifyLoginPayload, UserController.userLogin);


// ROuter for getting all the users
router.get("/show", UserController.getUsers);

module.exports = router;
