const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment, Vote, Pet } = require('../models');
// const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', (req, res) => {
    console.log(req.body);
    console.log('');
    Post.findAll({
        where: {
            user_id: req.body.user_id
        },
        attributes: [
            'id',
            'post_image',
            'item',
            'created_at'
            [sequelize.literal('(SELECT COUNT(*) FROM vote Where post.id = vote_id)'), 'vote_count']
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            },
            {
                // model: Pet
            }
        ]
    })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('dashboard', { posts, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
// not sure if server will start because of the WithAuth
router.get('/edit/:id', (req, res) => {
    Post.findByPk(req.params.id, {
        attributes: [
            'id',
            'post_image',
            'item',
            'description',
            'created_at'
            [sequelize.literal('(SELECT COUNT(*) FROM vote Where post.id = vote_id)'), 'vote_count']
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            },
            {
                // model: Pet
            }
        ]
    })
        .then(dbPostData => {
            if (dbPostData) {
                const post = dbPostData.get({ plain: true });
                // i think i have to make the edit post page
                res.render('', {
                    post,
                    loggedIn: true
                });
            } else {
                res.status(404).end();
            }
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

module.exports = router;
