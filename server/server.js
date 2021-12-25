import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { ApolloServer, gql } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
import { Schema } from "./schema/schema.js";
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
const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs: Schema.typeDefs,
  resolvers: Schema.resolvers,
});

await server.start();

server.applyMiddleware({ app });

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));

console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
mongoose
  .connect("mongodb://localhost:27017/dealit", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

app.get("/userlists", function (req, res) {
  res.send({
    message: "welcome to this damn hell",
  });
});

app.post("/loginadmin", (req, res) => {
  console.log(req.body);
  if (req.body.username == "admin" && req.body.password == "123456") {
    res.send({
      token: "test123",
    });
  } else {
    res.send({
      error: "welcome to this damn hell",
    });
  }
});
