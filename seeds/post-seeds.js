const { Post } = require('../models');

const postdata = [
  {
    item: 'Aloe Plant',
    post_image:
      'https://petsnack-image-bucket.s3.us-east-2.amazonaws.com/877eec136650edae942bb31292f2d2b7',
    description: 'Is it safe to have an aloe plant in my house?',
    user_id: 6,
  },
  {
    item: 'Fruit Loops Cereal',
    post_image:
      'https://petsnack-image-bucket.s3.us-east-2.amazonaws.com/877eec136650edae942bb31292f2d2b7',
    description: 'My cat licks my cereal when I leave, is that safe?',
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
