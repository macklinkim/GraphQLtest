const { posts } = require('../../data/dummyData');

const postResolvers = {
  Query: {
    posts: () => posts,
    post: (parent, { id }) => posts.find(post => post.id === id),
  },
};

module.exports = postResolvers;