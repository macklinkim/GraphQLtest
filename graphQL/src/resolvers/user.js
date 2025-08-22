const { users } = require('../../data/dummyData');

const userResolvers = {
  Query: {
    users: () => users,
    user: (parent, { id }) => users.find(user => user.id === id),
  },
};

module.exports = userResolvers;