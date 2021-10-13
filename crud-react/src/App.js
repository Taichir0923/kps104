import { Fragment, useState } from 'react';
import Navigation from "./Components/Navigation";
import Container from './Components/Component';
import Form from './Components/Form';
import Card from './Components/Card';
import Label from './Components/Label';
import Input from './Components/Input';
import Button from './Components/Button';
import List from './Components/List';

const navigation = ["Home", "About", "Service", "Contact"];

function App() {
  const [users, setUsers] = useState([])
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const submitHandler = e => {
    e.preventDefault();
    setUsers([...users, {
      username: username,
      email: email,
      number: number,
      password: password,
      id: +Math.random().toString().split('.')[1]
    }]);
    console.log(users);
    resetForm()
  }

  const deleteHandler = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  function resetForm(){
    setUsername('');
    setEmail('');
    setNumber('');
    setPassword('');
  }
  return <Fragment>
    <div className="w-full flex items-center justify-between bg-green-400 font-bold text-white">
      <div className="pl-4">
        <h1 className="text-3xl">Logo</h1>
      </div>
      <Navigation nav={navigation} />
    </div>
    <main className="my-6 w-full">
      <Container>
        <Card>
          <Form submitHandler={submitHandler}>
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
            <Button val="Бүртгэх" type='normal' bg="green" />
          </Form>
        </Card>

        <Card>
          <List datas={users} deleteHandler={deleteHandler} />
        </Card>

      </Container>
    </main>
  </Fragment>
}

export default App;
