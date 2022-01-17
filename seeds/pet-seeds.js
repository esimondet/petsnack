const { Pet } = require('../models');

const petdata = [
  {
    pet_name: 'House',
    species: 'Dog',
    breed: 'Husky',
    weight: 120,
    user_id: 1,
  },
  {
    pet_name: 'Elliot',
    species: 'Dog',
    breed: 'German Shepard',
    weight: 70,
    user_id: 2,
  },
  {
    pet_name: 'Omen',
    species: 'Cat',
    breed: 'Persian',
    weight: 12,
    user_id: 3,
  },
  {
    pet_name: 'Nadette',
    species: 'Dog',
    breed: 'Bulldog',
    weight: 40,
    user_id: 4,
  },
  {
    pet_name: 'Amanda',
    species: 'Dog',
    breed: 'Golden Retriever',
    weight: 70,
    user_id: 5,
  },
  {
    pet_name: 'Nik',
    species: 'Cat',
    breed: 'Siamese',
    weight: 13,
    user_id: 6,
  },

  {
    pet_name: 'Pik',
    species: 'Cat',
    breed: 'Siamese',
    weight: 11,
    user_id: 6,
  },
  {
    pet_name: 'Waiss',
    species: 'Dog',
    breed: 'French Poodle',
    weight: 62,
    user_id: 7,
  },
  {
    pet_name: 'Meika',
    species: 'Cat',
    breed: 'Torti',
    weight: 70,
    user_id: 7,
  },
  {
    pet_name: 'Xar',
    species: 'Dog',
    breed: 'Dobermann',
    weight: 70,
    user_id: 8,
  },
  {
    pet_name: 'Travis',
    species: 'Dog',
    breed: 'Husky',
    weight: 67,
    user_id: 8,
  },
  {
    pet_name: 'Cirka',
    species: 'Cat',
    breed: 'Maine Coon',
    weight: 15,
    user_id: 9,
  },
  {
    pet_name: 'Wahzy',
    species: 'Cat',
    breed: 'Maine Coon',
    weight: 14,
    user_id: 10,
  },
];

const seedPets = () => Pet.bulkCreate(petdata);

module.exports = seedPets;
