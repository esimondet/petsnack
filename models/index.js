//import all models
const User = require('./User');
const Pet = require('./Pet');

//create associations
User.hasMany(Pet, {
  foreignKey: 'user_id',
});

Pet.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

module.exports = {
  User,
  Pet,
  // Post,
  // Comment,
  // Vote,
};
