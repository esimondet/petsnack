const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'petgal2',
    email: 'susi@cbc.ca',
    password: 'password123',
  },
  {
    username: 'seymorpets',
    email: 'superpet@sogou.com',
    password: 'password123',
  },
  {
    username: 'petman2',
    email: 'suchapet@last.fm',
    password: 'password123',
  },
  {
    username: 'stew4pets',
    email: 'kissthecook@goo.ne.jp',
    password: 'password123',
  },
  {
    username: 'iluvpets',
    email: 'gmod4@weather.com',
    password: 'password123',
  },
  {
    username: 'apetasmile',
    email: 'noburnout@imdb.com',
    password: 'password123',
  },
  {
    username: 'heytheregoodpet',
    email: 'suchagoodpet@feedburner.com',
    password: 'password123',
  },
  {
    username: 'tennispet',
    email: 'theyplaytennis@china.com.cn',
    password: 'password123',
  },
  {
    username: 'dan45',
    email: 'daaannn@google.ru',
    password: 'password123',
  },
  {
    username: 'rpetscool',
    email: 'petdude@epa.gov',
    password: 'password123',
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
