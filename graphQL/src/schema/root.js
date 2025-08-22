const { gql } = require('apollo-server-express');

const rootSchema = gql`
  type Query {
    _empty: String
  }
`;

module.exports = rootSchema;
