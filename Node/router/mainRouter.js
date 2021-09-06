const express = require('express');
const router = express.Router();
const mainController = require('../controller/mainController');

router.get('/', mainController.homeController)

router.get('/usersList', mainController.loginContoller)

router.get('/user/:id', mainController.userController);

router.get('/register', mainController.getRegisterController)
router.post('/signup', mainController.postRegisterController)

router.get('/edit/:id', mainController.getEditController)
router.post('/edit', mainController.postEditController)

router.post('/delete', mainController.postDeleteController)

module.exports = router;

// MVC - Model, View, Controller