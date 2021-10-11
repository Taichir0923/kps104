import {useState} from 'react';
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
const Form = () => {
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
            password: password
        }]);
        console.log(users)
    }

    return <>
     <form className='flex w-full flex-col' onSubmit={submitHandler}>
        <Label lab="Username" htmlFor="username" />
        <Input
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
            id="username"
        />

        <Label lab="Email" htmlFor="email" />
        <Input
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            id="email"
        />

        <Label lab="Number" htmlFor="number" />
        <Input
            onChange={e => setNumber(e.target.value)}
            placeholder="Number"
            id="number"
            type="number"
        />

        <Label lab="Password" htmlFor="password" />
        <Input
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            id="password"
            type="password"
        />
        <Button val="Бүртгэх" bg="green" />
    </form>
    </>
}

export default Form;
// useRef

// Create, Read, Update, Delete