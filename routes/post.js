
const express = require('express');

const {getPosts,createPost}= require('../control/post');
const {getPost,createPosts}= require('../control/competition');
const {getPest,createPests}= require('../control/submission');
const {getPist,createPists}= require('../control/like');

const router = express.Router();

router.get('/', getPosts);
router.post('/post',createPost);
router.get('/competition', getPost);
router.post('/comp',createPosts);
router.get('/competition/:id/submissions', getPest);
router.post('/sub',createPests);
router.get('/lik', getPist);
router.post('/like',createPists);


module.exports = router;