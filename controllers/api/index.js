const router = require('express').Router();

const userRoutes = require('./user-routes');
const petRoutes = require('./pet-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/pets', petRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;