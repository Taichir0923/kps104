import { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux'; 
// import { counterIncreate , counterDecrease } from './ACTION/counterAction';
import {addTodo , editTodo} from './ACTION/todoAction';

function App() {
  const [ taskName , setTaskName ] = useState('');
  const [ currentTodoId , setCurrentTodoId ] = useState(null);
  const [ editMode , setEditMode ] = useState(false)
  const dispatch = useDispatch();
  const todoList = useSelector(state => state.todo);
  const { todos } = todoList;

  // const increaseHandler = () => {
  //   dispatch(counterIncreate());
  // }

  // const decreaseHandler = () => {
  //   dispatch(counterDecrease());
  // }

  const submitHandler = e => {
    e.preventDefault();
    dispatch(addTodo({
      taskName: taskName,
      id: Math.random().toString().split('.')[1]
    }))
  }

  const getTodoHandler = (id) => {
    setTaskName(id.taskName);
    setCurrentTodoId(id.id);
    setEditMode(true);
  }

  const editTodoHandler = e => {
    e.preventDefault();
    dispatch(editTodo({
      taskName: taskName,
      id: currentTodoId
    }))
  }

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      {/* <h1 className="text-4xl mb-8">{counter}</h1>
      <div className="flex gap-4 items-center">
        <button onClick={decreaseHandler} className="py-2 px-6 bg-green-400 text-white rounded-md">-1</button>
        <button onClick={increaseHandler} className="py-2 px-6 bg-green-400 text-white rounded-md">+1</button>
      </div>
      <div className="flex gap-4 items-center">
        <button onClick={decreaseHandler} className="py-2 px-6 bg-green-400 text-white rounded-md">-10</button>
        <button onClick={increaseHandler} className="py-2 px-6 bg-green-400 text-white rounded-md">+10</button>
      </div> */}

      <form onSubmit={editMode ? editTodoHandler : submitHandler} className="flex flex-col">
        <label htmlFor="task">Ажлын нэр</label>
        <input onChange={e => setTaskName(e.target.value)} type="text" id="task" className="py-2 px-4 border border-gray-300" placeholder="Хийх ажлын нэр" value={taskName} />
        <button className="py-2 px-4 border border-gray-300 mt-4">
          {
            editMode ? "Засах" : "Оруулах"
          }
        </button>
      </form>

      {
        todos.length === 0 ? <p>Хоосон байна</p> : todos.map((el, index) => (
          <h1 key={index} className="flex gap-4">
            <p>{el.taskName}</p>
            <button onClick={() => getTodoHandler(el)}>edit</button>
          </h1>
        ))
      }
    </div>
  );
}

export default App;
