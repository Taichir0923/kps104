const express = require('express');
const router = express.Router();
const mainController = require('../controller/mainController');

router.get('/', mainController.homeController)

router.get('/usersList', mainController.loginContoller)

router.get('/user/:id', mainController.userController);

router.get('/register', mainController.getRegisterController)
router.post('/signup', mainController.postRegisterController)

module.exports = router;

// MVC - Model, View, Controller