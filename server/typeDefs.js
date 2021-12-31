import { gql } from "apollo-server-express";

export default gql`
  scalar Upload
  type Movie {
    id: ID!
    name: String!
    producer: String!
    rating: Float!
  }
  type Product {
    id: ID!
    name: String!
    price: Float!
  }
  type singleUploadResult {
    success: String!
    message: String!
    mimetype: String
    encoding: String
    filename: String
    location: String
  }
  type Query {
    getMovies: [Movie]
    getMovie(id: ID!): Movie
    getAllProducts: [Product]
  }
  type Mutation {
    addMovie(name: String!, producer: String!, rating: Float!): Movie
    updateMovie(name: String!, producer: String!, rating: Float): Movie
    deleteMovie(id: ID!): Movie
    addProduct(name: String!, price: Float!): Product
    singleUpload(file: Upload!): singleUploadResult
  }
`;
