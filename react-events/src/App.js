import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [atsonh, setAtsonh] = useState(true);
  const [btsonh, setBtsonh] = useState(false);
  const [ctsonh, setCtsonh] = useState(false);

  const taskHandler = () => {
    setTaskList([...taskList, {
      taskName: task,
      id: +Math.random().toString().split('.')[1]
    }]);
  }

  const deleteHandler = id => {
    setTaskList(taskList.filter(el => el.id !== id));
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
      <div className="App">
        <input onChange={e => setTask(e.target.value)} type='text' placeholder='хийх ажлаа оруул' />
        <button onClick={taskHandler}>Insert</button>
        <ul>
          {
            taskList.map(list => (
              <div key={`task--${list.id}`}>
                <li style={{ display: 'inline-block', marginRight: '3rem' }}>{list.taskName}</li>
                <button onClick={() => deleteHandler(list.id)}>x</button>
              </div>
            ))
          }
        </ul>
      </div>
      <div>
        <button onClick={openA}>a tsonh</button>
        <button onClick={openB}>b tsonh</button>
        <button onClick={openC}>c tsonh</button>

        {
          atsonh &&
            <div>
              A tsonh
            </div>
        }

        {
          btsonh &&
            <div>
              B tsonh
            </div>
        }

        {
          ctsonh &&
            <div>
              C tsonh
            </div>
        }
      </div>
    </>
  );
}

export default App;
