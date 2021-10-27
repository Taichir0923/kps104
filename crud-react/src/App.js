import { Fragment, useEffect, useState } from 'react';
import swal from '@sweetalert/with-react';
import ReactDOM from 'react-dom';
import Navigation from "./Components/Navigation";
import Container from './Components/Container';
import Form from './Components/Form';
import Card from './Components/Card';
import Label from './Components/Label';
import Input from './Components/Input';
import Button from './Components/Button';
import List from './Components/List';
import Backdrop from './Components/Backdrop';

const navigation = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Login',
    path: '/login'
  }
];

function App() {
  const [editMode, setEditMode] = useState(false);
  const [userID, setUserID] = useState('');
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorTitle, setErrorTitle] = useState('');
  const [errorMessage, SetErrorMessage] = useState('');
  const [error, setError] = useState(false);
  const [updated, setUpdated] = useState(false)

  const submitHandler = e => {
    e.preventDefault();
    if (username.trim() !== '' && email.trim() !== '' && number.trim() !== '' && password.trim() !== '') {
      const user = {
        username: username,
        email: email,
        number: number,
        password: password
      }

      fetch('http://localhost:3001/register', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })
        .then(response => {
          if (!response.ok) {
            throw Error('Хэрэглэгч бүртгэхэд алдаа гарлаа')
          }
          return response.json()
        })
        .then(result => swal(result.message))
        .catch(err => {
          swal(err.message)
        })

      // console.log(user)
      resetForm();
      setUpdated(true);
      setTimeout(() => {
        setUpdated(false)
      }, 100)
    } else {
      setError(true);
      setErrorTitle('Алдаа гарлаа');
      SetErrorMessage('Бүх талбаруудыг бөглөнө үү...');
    }
  }

  const deleteHandler = id => {

    fetch('http://localhost:3001/deleteUser', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ _id: id })
    })
      .then(res => {
        if (!res.ok) {
          throw Error('Алдаа гарлаа')
        }
        return res.json()
      })
      .then(result => {
        swal(result.message)
      })
      .catch(err => swal(err.message))
    setEditMode(false);
    resetForm();
    setUpdated(true);
    setTimeout(() => {
      setUpdated(false)
    }, 100)
  }

  const editHandler = id => {
    const updateUserInfo = users.find(user => user._id === id);
    setUsername(updateUserInfo.username);
    setEmail(updateUserInfo.email);
    setNumber(updateUserInfo.number);
    setPassword(updateUserInfo.password);
    setEditMode(true)
    setUserID(id)
  }

  const updateHandler = id => {
    const updatedUser = {
      username: username,
      email: email,
      number: number,
      password: password,
      _id: id
    }
    fetch('http://localhost:3001/updateUser', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedUser)
    })
      .then(response => {
        if (!response.ok) {
          throw Error('Мэдээллийг шинэчлэхэд алдаа гарлаа...')
        }
        return response.json();
      })
      .then(result => swal(result.message))
      .catch(err => swal(err.message))
    setEditMode(false);
    resetForm();
    setUpdated(true);
    setTimeout(() => {
      setUpdated(false)
    }, 100)
  }

  const hideModalHandler = () => {
    setError(false);
    SetErrorMessage(null)
  }

  function resetForm() {
    setUsername('');
    setEmail('');
    setNumber('');
    setPassword('');
  }

  useEffect(() => {
    fetch('http://localhost:3001/allUsers')
      .then(res => res.json())
      .then(result => {
        setUsers(result);
      })
  }, [updated]);

  return <Fragment>
    {
      error &&
      ReactDOM.createPortal(<Backdrop title={errorTitle} onClick={hideModalHandler} message={errorMessage} />, document.querySelector('#portal'))
    }
    <div className="w-full flex items-center justify-between bg-green-400 font-bold text-white">
      <div className="pl-4">
        <h1 className="text-3xl">Logo</h1>
      </div>
      <Navigation nav={navigation} />
    </div>
    <main className="my-6 w-full">
      <Container>
        <Card>
          <Form submitHandler={editMode ? (e) => {
            e.preventDefault()
            updateHandler(userID)
          } : submitHandler}>
            <Label lab="Username" htmlFor="username" />
            <Input
              onChange={e => setUsername(e.target.value)}
              placeholder="Username"
              id="username"
              value={username}
            />

            <Label lab="Email" htmlFor="email" />
            <Input
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              id="email"
              value={email}
            />

            <Label lab="Number" htmlFor="number" />
            <Input
              onChange={e => setNumber(e.target.value)}
              placeholder="Number"
              id="number"
              type="number"
              value={number}
            />

            <Label lab="Password" htmlFor="password" />
            <Input
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              id="password"
              type="password"
              value={password}
            />
            <Button val={editMode ? 'Засах' : "Бүртгэх"} type='normal' bg="green" />
          </Form>
        </Card>

        <Card>
          {
            users && <List datas={users} deleteHandler={deleteHandler} editHandler={editHandler} />
          }
        </Card>

      </Container>
    </main>
  </Fragment>
}

export default App;


// Гэрт fetch API ашиглан өгөгдөл татах
// https://jsonplaceholder.typicode.com/users