import { useState, Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Form, Button, Spinner , Col } from 'react-bootstrap';
import { getNewTodo, getTodos , deleteTodo , updateTodo} from './ACTION/todoActions';

const App = () => {
  const dispatch = useDispatch();
  const todo = useSelector(state => state.todoReducers);
  const data = useSelector(state => state.allTodos);
  const deleteData = useSelector(state => state.deleteTodoReducer);
  const [taskName, setTaskName] = useState('')
  const [update, setUpdate] = useState(false)
  const [changeDataMode, setChangeDataMode] = useState(false);
  const [currentId, setCurrentId] = useState('')
  const { todos, loading, error } = data;
  useEffect(() => {
    dispatch(getTodos())
    setUpdate(false)
  }, [dispatch, update])

  const newTodoHandler = () => {
    const formData = {
      taskName: taskName
    }
    dispatch(getNewTodo(formData));
    setUpdate(true);
    setTaskName('')
  }

  return <Fragment>
    <Container fluid className="py-3">
      <Form>
        <Form.Label htmlFor="taskName">Хийх ажил</Form.Label>
        <div className="d-flex gap-1">
          <Form.Control placeholder="Ажлын нэр оруул" onChange={e => setTaskName(e.target.value)} value={taskName} id="taskName" />
          {
            !changeDataMode ? <Button onClick={newTodoHandler}>Бүртгэх</Button> :
            <Button onClick={() => {
              dispatch(updateTodo({
                taskName: taskName
              }, currentId))
              setUpdate(true);
              setChangeDataMode(false);
              setTaskName('')
            }}>Засах</Button>
          }
        </div>
      </Form>
      <Col className="mx-auto" md={8}>
        {
          error && <p>{error.message}</p>
        }
        {
          loading && <Spinner animation="border" />
        }
        {
          todos.todos && todos.todos.map(toto => (
            <div key={toto._id} className="d-flex justify-content-between align-items-center p-2 border rounded my-1">
              <p className="m-0">{toto.taskName}</p>
              <div className="d-flex gap-1">
                <Button onClick={() => {
                  setCurrentId(toto._id);
                  setChangeDataMode(true);
                  setTaskName(toto.taskName);
                }}>zasah</Button>
                
                <Button onClick={() => {
                  dispatch(deleteTodo(toto._id))
                  setUpdate(true)
                  setChangeDataMode(false)
                }} variant="danger">ustgah</Button>
              </div>
            </div>
          ))
        }
      </Col>
    </Container>
  </Fragment>
}

export default App;
