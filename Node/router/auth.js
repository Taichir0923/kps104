const express = require('express');
const router = express.Router();

const authentication = require('../controller/authController');

router.get('/login', authentication.getLoginController)
router.post('/logout', authentication.postLogoutController)

router.post('/user/login' , authentication.postLoginController)

module.exports = router