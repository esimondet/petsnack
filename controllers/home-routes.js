const router = require('express').Router();
const sequelize = require('../config/connection');

//direct to homepage

router.get('/', (req, res) => {
  res.render('homepage');
});
// .catch((err) => {
//   res.status(500).json(err);
// });

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;