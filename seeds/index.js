const seedUsers = require('./user-seeds');
const seedPets = require('./pet-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedPets();
  console.log('--------------');

  //   await seedPosts();
  //   console.log('--------------');

  //   await seedComments();
  //   console.log('--------------');

  //   await seedVotes();
  //   console.log('--------------');

  process.exit(0);
};

seedAll();
