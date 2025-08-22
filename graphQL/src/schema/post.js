const { gql } = require('apollo-server-express');

const postSchema = gql`
  type Post {
    id: ID!
    title: String!
    content: String
    authorId: ID!
  }

  type Query {
    posts: [Post]
    post(id: ID!): Post
  }
`;

module.exports = postSchema;