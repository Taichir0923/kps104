const Todo = require('../model/todo');
class TodoController {
    addTodo(req, res){
        const { taskName } = req.body;
        const todo = new Todo({
            taskName: taskName,
            completed: false 
        })

        todo.save()
            .then(result => {
                res.json({
                    message: 'Амжилттай бүртгэгдлээ',
                    data: result
                })
            })
            .catch(err => console.log(err))
    }

    getTodos(req, res){
        Todo.find()
            .then(todos => {
                res.json({
                    todos: todos
                })
            })
    }

    deleteTodo(req, res){
        const todoId = req.params.id;
        Todo.findByIdAndRemove(todoId)
            .then(result => {
                res.json({
                    message: 'Amjilttai',
                    data: result
                })
            })
    }

    updateTodo(req, res){
        const todoId = req.params.id;
        const {taskName} = req.body;
        Todo.findById(todoId)
            .then(result => {
                result.taskName = taskName
                return result.save()
                    .then(todo => {
                        res.json({
                            message: "Success",
                            todo: todo
                        })
                    })
            })
    }
}

module.exports = new TodoController()