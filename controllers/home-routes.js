const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Pet, Comment } = require('../models');

//direct to homepage

// router.get('/', (req, res) => {
//   console.log('');
//   Post.findAll({
//     attributes: [
//       'id',
//       'post_image',
//       'item',
//       'created_at',
//       [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
//     ],
//     include: [
//       {
//         model: Comment,
//         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//         include: {
//           model: User,
//           attributes: ['username']
//         }
//       },
//       {
//         model: User,
//         attributes: ['username']
//       },
//       {
//         model: Pet,
//       }
//     ]
//   })
//     .then(dbPostData => {
//       const posts = dbPostData.map(post => post.get({ plain: true }));

//       res.render('homepage', {
//         posts,
//         loggedIn: req.body.loggedIn
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
//   res.render('homepage');
// });

router.get('/', (req, res) => {
  res.render('homepage');
})




router.get('/login', (req, res) => {
  if (req.body.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
