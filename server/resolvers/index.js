import Movie from "../models/movie.js";
export default {
  Query: {
    getMovies: (parent, args) => {
      return Movie.all({});
    },
    getMovie: (parent, args) => {
      return Movie.findById(args.id);
    },
  },
  Mutation: {
    addMovie: (parent, args) => {
      return args;
      let Movie = new Movie({
        name: args.name,
        producer: args.producer,
        rating: args.rating,
      });
      //   return Movie.save();
      // let Movie = new Movie();
      //   Movie.name = args.name;
      //   Movie.producer = args.producer;
      //   Movie.rating = args.rating;
      //   return Movie.save();
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
  },
};
