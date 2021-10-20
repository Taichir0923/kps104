const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController')

router.get('/allUsers', userController.getUsers)

router.post('/register', userController.registerUser)

router.post('/updateUser', userController.updateUser)

router.post('/deleteUser', userController.deleteUser)

module.exports = router;