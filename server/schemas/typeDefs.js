const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedbooks: [Book]!
  }

  type Book {
    _id: ID
    authors: String
    description: String
    bookId: String
    image: String
    link: String 
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  input BookInput {
    authors: String
    description: String
    bookId: String
    image: String
    link: String 
    title: String
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(saveBook: [BookInput]): User
    deleteBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;