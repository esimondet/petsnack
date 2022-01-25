//import all models
const User = require('./User');
const Pet = require('./Pet');
const Post = require('./Post');
const Comment = require('./Comment');
const Vote = require('./Vote');

//create associations
//users are not limited to the number of pets they can have
User.hasMany(Pet, {
  foreignKey: 'user_id',
});

//pets can only belong to one owner
Pet.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

//users are not limited to the number of posts they can have
User.hasMany(Post, {
  foreignKey: 'user_id',
});

//posts can only belong to one owner
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

//users can vote on many posts
User.belongsToMany(Post, {
  through: Vote,
  as: 'voted_posts',

  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

//posts can have many votes
Post.belongsToMany(User, {
  through: Vote,
  as: 'voted_posts',
  foreignKey: 'post_id',
  onDelete: 'SET NULL',
});

Vote.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Vote.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL',
});

User.hasMany(Vote, {
  foreignKey: 'user_id',
});

Post.hasMany(Vote, {
  foreignKey: 'post_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

module.exports = {
  User,
  Pet,
  Post,
  Comment,
  Vote,
};
