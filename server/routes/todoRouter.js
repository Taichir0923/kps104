const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoContoller')

router.post('/newTodo', todoController.addTodo);
router.get('/getTodos', todoController.getTodos);
router.post('/deleteTodo/:id', todoController.deleteTodo);
router.post('/updateTodo/:id', todoController.updateTodo);

module.exports = router;