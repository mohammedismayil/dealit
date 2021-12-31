import Movie from "../models/movie.js";
import Product from "../models/product.js";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

import {
  GraphQLUpload,
  graphqlUploadExpress, // A Koa implementation is also exported.
} from "graphql-upload";
import { finished } from "stream/promises";

export default {
  Query: {
    getMovies: (parent, args) => {
      async function getAllMovies() {
        const resp = await Movie.find({});

        return resp;
      }

      return getAllMovies();
    },
    getMovie: (parent, args) => {
      return Movie.findById(args.id);
    },

    getAllProducts: (parent, args) => {
      async function getAllProductsfun() {
        const resp = await Product.find({});

        return resp;
      }

      return getAllProductsfun();
    },
  },
  Mutation: {
    addMovie: (parent, args) => {
      // let movie = new Movie({

      // });
      const CMovie = new Movie({
        name: args.name,
        producer: args.producer,
        rating: args.rating,
      });

      CMovie.save();
      return CMovie;
    },
    updateMovie: (parent, args) => {
      if (!args.id) return;
      return Movie.findOneAndUpdate(
        {
          _id: args.id,
        },
        {
          $set: {
            name: args.name,
            producer: args.producer,
            rating: args.rating,
          },
        },
        { new: true },
        (err, Movie) => {
          if (err) {
            console.log("Something went wrong when updating the movie");
          } else {
          }
        }
      );
    },

    addProduct: (parent, args) => {
      // let movie = new Movie({

      // });
      const IProduct = new Product({
        name: args.name,
        price: args.price,
      });

      IProduct.save();
      return IProduct;
    },
    singleUpload: async (_, args) => {
      let t = await typeCheck(args.file);
      if (t) {
        return uploadProcess(args.file);
      } else {
        return {
          success: false,
          message: "Type Error",
        };
      }
    },
  },
};
let uploadProcess = async (file) => {
  let { createReadStream, filename, mimetype, encoding } = await file;
  let stream = createReadStream();
  let path = "uploads/" + uuid() + filename;
  return new Promise((resolve, reject) =>
    stream
      .on("error", (error) => {
        if (error) fs.unlinkSync(path);
        reject({
          success: false,
          message: "Some Error",
        });
      })
      .pipe(fs.createWriteStream(path))
      .on("finish", () => {
        resolve({
          filename,
          mimetype,
          encoding,
          location: path,
          success: true,
          message: "Successfully Uploaded!",
        });
      })
  );
};

//Mime type check
let typeCheck = async (item) => {
  let { mimetype } = await item;
  if (!(mimetype === "image/png" || mimetype === "image/jpeg")) {
    return false;
  } else {
    return true;
  }
};