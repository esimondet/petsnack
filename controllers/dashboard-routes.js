const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Vote, Pet } = require('../models');
// const withAuth = require('../utils/auth');

// get all posts for dashboard
// router.get('/', withAuth, (req, res) => {});

// router.get('/edit/:id', withAuth, (req, res) => {});

module.exports = router;
