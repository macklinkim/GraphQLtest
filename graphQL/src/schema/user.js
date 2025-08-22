const { gql } = require('apollo-server-express');

const userSchema = gql`
  type User {
    id: ID!
    name: String!
    email: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }
`;

module.exports = userSchema;