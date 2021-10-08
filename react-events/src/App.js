import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { BsCheck } from 'react-icons/bs';
function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [atsonh, setAtsonh] = useState(true);
  const [btsonh, setBtsonh] = useState(false);
  const [ctsonh, setCtsonh] = useState(false);

  const taskHandler = () => {
    setTaskList([...taskList, {
      taskName: task,
      id: +Math.random().toString().split('.')[1],
      completed: false
    }]);
  }

  const deleteHandler = id => {
    setTaskList(taskList.filter(el => el.id !== id));
  }

  const statusHandler = id => {
    const taskIndex = taskList.findIndex(el => el.id === id);
    const updatedTaskList = [...taskList];
    updatedTaskList[taskIndex].completed = !updatedTaskList[taskIndex].completed;
    setTaskList(updatedTaskList);
  }

  const openA = () => {
    setAtsonh(true);
    setBtsonh(false);
    setCtsonh(false);
  }

  const openB = () => {
    setAtsonh(false);
    setBtsonh(true);
    setCtsonh(false);
  }

  const openC = () => {
    setAtsonh(false);
    setBtsonh(false);
    setCtsonh(true);
  }

  return (
    <>
      <div className="w-full py-4 flex justify-center">
        <input className='border border-r-0 py-2 px-4 border-gray-300 rounded-l-full' onChange={e => setTask(e.target.value)} type='text' placeholder='хийх ажлаа оруул' />
        <button className='border border-l-0 py-2 px-4 rounded-r-full border-gray-300 bg-red-400 text-white' onClick={taskHandler}>Insert</button>
        {/* <ul>
          {
            taskList.map(list => (
              <div key={`task--${list.id}`}>
                <li style={{ display: 'inline-block', marginRight: '3rem' }}>{list.taskName}</li>
                <button onClick={() => deleteHandler(list.id)}>x</button>
              </div>
            ))
          }
        </ul> */}
      </div>
      <div className='w-3/5 mx-auto'>
        <div className='w-full flex gap-2 border-b-2 border-blue-500'>
          <button className={`py-3 bg-gray-300 rounded-t-xl font-bold px-5 ${atsonh ? 'bg-blue-500 text-white' : 'text-gray-600'}`} onClick={openA}>Бүгд</button>
          <button className={`py-3 bg-gray-300 rounded-t-xl font-bold px-5 ${btsonh ? 'bg-blue-500 text-white' : 'text-gray-600'}`} onClick={openB}>Хийсэн</button>
          <button className={`py-3 bg-gray-300 rounded-t-xl font-bold px-5 ${ctsonh ? 'bg-blue-500 text-white' : 'text-gray-600'}`} onClick={openC}>Хийгээгүй</button>
        </div>

        {
          atsonh &&
          <ul className='w-full flex flex-col gap-4 my-5'>
            {
              taskList.map(list => (
                <li key={`task_${list.id}`} className='flex hover:bg-gray-200 py-2 px-4 rounded-xl justify-between items-center'>
                  <p className={`font-bold text-gray-600 ${list.completed ? 'line-through' : ''}`}>{list.taskName}</p>
                  <div className='flex items-center gap-2'>
                    <button onClick={() => statusHandler(list.id)} className={`w-6 h-6 rounded-full flex items-center text-base bg-opacity-50 border-2 hover:bg-opacity-1 justify-center ${list.completed ? 'text-green-400 border-green-400 bg-green-400' : 'text-gray-400 border-gray-400 bg-gray-400'}`}>
                      <BsCheck />
                    </button>
                    <button onClick={() => deleteHandler(list.id)} className='w-6 h-6 rounded-full flex items-center text-xs bg-opacity-50 text-red-400 border-2 border-red-400 hover:bg-opacity-100 hover:text-white justify-center bg-red-400'>
                      <FaTimes />
                    </button>
                  </div>
                </li>
              ))
            }
          </ul>
        }

        {
          btsonh &&
          <ul className='w-full flex flex-col gap-4 my-5'>
            {
              taskList.filter(list => list.completed).map(list => (
                <li key={`task_${list.id}`} className='flex hover:bg-gray-200 py-2 px-4 rounded-xl justify-between items-center'>
                  <p className={`font-bold text-gray-600 ${list.completed ? 'line-through' : ''}`}>{list.taskName}</p>
                  <div className='flex items-center gap-2'>
                    <button onClick={() => statusHandler(list.id)} className={`w-6 h-6 rounded-full flex items-center text-base bg-opacity-50 border-2 hover:bg-opacity-1 justify-center ${list.completed ? 'text-green-400 border-green-400 bg-green-400' : 'text-gray-400 border-gray-400 bg-gray-400'}`}>
                      <BsCheck />
                    </button>
                    <button onClick={() => deleteHandler(list.id)} className='w-6 h-6 rounded-full flex items-center text-xs bg-opacity-50 text-red-400 border-2 border-red-400 hover:bg-opacity-100 hover:text-white justify-center bg-red-400'>
                      <FaTimes />
                    </button>
                  </div>
                </li>
              ))
            }
          </ul>
        }

        {
          ctsonh &&
          <ul className='w-full flex flex-col gap-4 my-5'>
            {
              taskList.filter(list => !list.completed).map(list => (
                <li key={`task_${list.id}`} className='flex hover:bg-gray-200 py-2 px-4 rounded-xl justify-between items-center'>
                  <p className={`font-bold text-gray-600 ${list.completed ? 'line-through' : ''}`}>{list.taskName}</p>
                  <div className='flex items-center gap-2'>
                    <button onClick={() => statusHandler(list.id)} className={`w-6 h-6 rounded-full flex items-center text-base bg-opacity-50 border-2 hover:bg-opacity-1 justify-center ${list.completed ? 'text-green-400 border-green-400 bg-green-400' : 'text-gray-400 border-gray-400 bg-gray-400'}`}>
                      <BsCheck />
                    </button>
                    <button onClick={() => deleteHandler(list.id)} className='w-6 h-6 rounded-full flex items-center text-xs bg-opacity-50 text-red-400 border-2 border-red-400 hover:bg-opacity-100 hover:text-white justify-center bg-red-400'>
                      <FaTimes />
                    </button>
                  </div>
                </li>
              ))
            }
          </ul>
        }
      </div>
    </>
  );
}

export default App;
