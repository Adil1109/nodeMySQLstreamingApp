const express = require('express');

const router = express.Router();
const postsController = require('../controllers/postsController');

const { identifier } = require('../middlewares/identification');

router.get('/get-posts', postsController.getPosts);
router.get('/get-post/:id', postsController.getPost);
router.get('/search/:_term', postsController.searchPost);
router.post('/create-post', identifier, postsController.createPost);
router.patch('/update-post/:id', identifier, postsController.updatePost);
router.delete('/delete-post/:id', identifier, postsController.deletePost);

module.exports = router;
