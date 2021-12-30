import Movie from "../models/movie.js";
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
  },
};
