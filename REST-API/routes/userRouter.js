const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const middleware = require('../middleware/is-auth')

router.post('/signup', UserController.userReg)
router.post('/login', UserController.userLogin)
router.get('/user/:id', middleware.idAuth, UserController.userInfo)

module.exports = router;