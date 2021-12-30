import { gql } from "apollo-server-express";

export default gql`
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
  type Query {
    getMovies: [Movie]
    getMovie(id: ID!): Movie
    getProducts: [Product]
  }
  type Mutation {
    addMovie(name: String!, producer: String!, rating: Float!): Movie
    updateMovie(name: String!, producer: String!, rating: Float): Movie
    deleteMovie(id: ID!): Movie
    addProduct(name: String!, price: Float!): Product
  }
`;
