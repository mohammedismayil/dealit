import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
const app = express();
// const mongoose = mongoose();
// const dotenv = dotenv();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
dotenv.config();
mongoose.connect("mongodb://localhost:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});