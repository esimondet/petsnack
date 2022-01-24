const { Pet } = require('../models');

const petdata = [
  {
    pet_name: 'House',
    pet_image: null,
    species: 'Dog',
    breed: 'Husky',
    weight: 120,
    user_id: 1,
  },
  {
    pet_name: 'Elliot',
    pet_image: null,
    species: 'Dog',
    breed: 'German Shepard',
    weight: 70,
    user_id: 2,
  },
  {
    pet_name: 'Omen',
    pet_image: null,
    species: 'Cat',
    breed: 'Persian',
    weight: 12,
    user_id: 3,
  },
  {
    pet_name: 'Nadette',
    pet_image: null,
    species: 'Dog',
    breed: 'Bulldog',
    weight: 40,
    user_id: 4,
  },
  {
    pet_name: 'Amanda',
    pet_image: null,
    species: 'Dog',
    breed: 'Golden Retriever',
    weight: 70,
    user_id: 5,
  },
  {
    pet_name: 'Nik',
    pet_image: null,
    species: 'Cat',
    breed: 'Siamese',
    weight: 13,
    user_id: 6,
  },

  {
    pet_name: 'Paddington',
    pet_image:
      'https://petsnack-image-bucket.s3.us-east-2.amazonaws.com/fbd3ae7d75e43e05a2d1b434981323cd',
    species: 'Cat',
    breed: 'Siamese',
    weight: 11,
    user_id: 6,
  },
  {
    pet_name: 'Waiss',
    pet_image: null,
    species: 'Dog',
    breed: 'French Poodle',
    weight: 62,
    user_id: 7,
  },
  {
    pet_name: 'Jinx',
    pet_image:
      'https://petsnack-image-bucket.s3.us-east-2.amazonaws.com/314fd75fca355b542884287d780748a6',
    species: 'Cat',
    breed: 'Torti',
    weight: 12,
    user_id: 7,
  },
  {
    pet_name: 'Xar',
    pet_image: null,
    species: 'Dog',
    breed: 'Dobermann',
    weight: 70,
    user_id: 8,
  },
  {
    pet_name: 'Travis',
    pet_image: null,
    species: 'Dog',
    breed: 'Husky',
    weight: 67,
    user_id: 8,
  },
  {
    pet_name: 'Ru',
    pet_image:
      'https://petsnack-image-bucket.s3.us-east-2.amazonaws.com/537d2801f0c1a7c9378d453f3156a443',
    species: 'Cat',
    breed: 'Tuxedo',
    weight: 15,
    user_id: 9,
  },
  {
    pet_name: 'Wahzy',
    pet_image: null,
    species: 'Cat',
    breed: 'Maine Coon',
    weight: 14,
    user_id: 10,
  },
];

const seedPets = () => Pet.bulkCreate(petdata);

module.exports = seedPets;
