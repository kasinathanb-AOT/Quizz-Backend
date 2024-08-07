// index.js
const express = require("express");
const server = express();
const cors = require("cors");
const PORT = 5000;
require("./db/connection");
const userRouter = require("./Router/router");
const quizRouter = require("./Router/quizRouter");

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
server.get("/", (req, res) => res.send("Welcome to the Quizz API"));
// Server listening
server.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
