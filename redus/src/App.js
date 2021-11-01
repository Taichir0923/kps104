import { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux'; 
// import { counterIncreate , counterDecrease } from './ACTION/counterAction';
import {addTodo} from './ACTION/todoAction';

function App() {
  const [ taskName , setTaskName ] = useState('')
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
    dispatch(addTodo(taskName))
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

      <form onSubmit={submitHandler} className="flex flex-col">
        <label htmlFor="task">Ажлын нэр</label>
        <input onChange={e => setTaskName(e.target.value)} type="text" id="task" className="py-2 px-4 border border-gray-300" placeholder="Хийх ажлын нэр" />
        <button className="py-2 px-4 border border-gray-300 mt-4">Оруулах</button>
      </form>

      {
        todos.length === 0 ? <p>Хоосон байна</p> : todos.map((el, index) => (
          <h1 key={index}>{el}</h1>
        ))
      }
    </div>
  );
}

export default App;
