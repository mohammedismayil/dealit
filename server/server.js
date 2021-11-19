import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
// const mongoose = mongoose();
// const dotenv = dotenv();

app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
dotenv.config();
// mongoose
//   .connect("mongodb://mongo:27017/dealit", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("DB Connection Successfull"))
//   .catch((err) => {
//     console.error(err);
//   });
app.use("/admin", (req, res) => {
  res.send({
    token: "test123",
  });
});