const express = require('express');
const router = express.Router();
const mainController = require('../controller/mainController');

router.get('/', mainController.homeController)

router.get('/login', mainController.loginContoller)

router.get('/user/:id', mainController.userController)


module.exports = router;