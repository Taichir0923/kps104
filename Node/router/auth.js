const express = require('express');
const router = express.Router();

const authentication = require('../controller/authController');

router.get('/login', authentication.getLoginController)

router.post('/user/login' , authentication.postLoginController)

module.exports = router