const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const rootSchema = require('./src/schema/root');
const userSchema = require('./src/schema/user');
const postSchema = require('./src/schema/post');
const userResolvers = require('./src/resolvers/user');
const postResolvers = require('./src/resolvers/post');

const typeDefs = [rootSchema, userSchema, postSchema];
const resolvers = [userResolvers, postResolvers];

async function startServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app });

  const port = 4000;
  app.listen(port, () => {
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
  });
}

startServer();
