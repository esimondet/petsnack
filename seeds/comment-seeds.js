const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Absolutely not!',
    user_id: 8,
    post_id: 1,
  },
  {
    comment_text:
      'Aloe is harmful to cats and dogs, but they probably would not try to eat it',
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: 'Would not chance it',
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: 'Gross! But probs safe',
    user_id: 4,
    post_id: 2,
  },
  {
    comment_text:
      'Sugar can be harmful but in small quanitites that should not be an issue',
    user_id: 9,
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
