const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.post('/newpost', postController.newPost)

module.exports = router;


// get, post
// put, patch

// put - datag ter chigt n shineer solino
// patch - 