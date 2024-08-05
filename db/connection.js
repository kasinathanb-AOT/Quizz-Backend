require("dotenv").config();

const mongoose = require("mongoose");
const connectionString = process.env.DATABASE_URL;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Mongo Atlas connected Successfully...");
  })
  .catch((error) => {
    console.log("Mongo Connection error", error);
  });
