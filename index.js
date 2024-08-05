// index.js
const express = require("express");
const server = express();
const PORT = 5000;
require("./db/connection");
const cors = require("cors");


const corsOption = {
  origin: "*"
}

server.use(cors(corsOption));

const userRouter = require("./Router/router");
// const adminRouter = require("./routes/adminRouter");
server.use(express.json());

server.use("/user", userRouter);
// server.use("/admin", adminRouter);

server.get("/", (req, res) => {
  res.send("Welcome to the Quizz API");
});

server.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});