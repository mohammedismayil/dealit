import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
const app = express();
// const mongoose = mongoose();
// const dotenv = dotenv();

app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse application/json
// app.use(bodyParser.json());

app.use(cors());
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
dotenv.config();
mongoose
  .connect("mongodb://mongo:27017/dealit", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

app.post("/loginadmin", (req, res) => {
  console.log(req.body);
  if (req.body.username == "admin" && req.body.password == "123456") {
    res.send({
      token: "test123",
    });
  } else {
    res.send({
      error: "welcome ",
    });
  }
});