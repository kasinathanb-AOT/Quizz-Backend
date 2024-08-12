const express = require("express");
const path = require("path");
const server = express();
const cors = require("cors");
const PORT = 5000;
require("./db/connection");
const userRouter = require("./Router/router");
const quizRouter = require("./Router/quizRouter");
const { verifyToken } = require("./middlewares/jwtHandler");

// Set view engine
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));

// Enables cors from any origin
const corsOption = { origin: "*" };
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(cors(corsOption));

// Router for user
server.use("/user", userRouter);
// Router for quiz
server.use("/quiz", quizRouter);

// Default API response
server.get("/", (req, res) => {
  res.render("success");
});

// Catch-all for unknown URLs
server.use((req, res) => {
  res.status(404).render("error");
});

// Middleware for handling errors
server.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render("error");
});

// Server listening
server.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
