import mongoose from "mongoose";
const Schema = mongoose.Schema;
const Movie = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    producer: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default Movie;

