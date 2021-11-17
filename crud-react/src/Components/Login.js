import React , { useState } from 'react';
import Button from './Button';
import Card from './Card';
import Form from './Form';
import Input from './Input';
import Label from './Label';

const Login = ({history}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const loginHandler = async e => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            const result = await response.json();

            if(result.user){
                history.push('/profile')
            }
    
        } catch(err){
            alert(err.message);
        }
    }

    return <div className="w-full h-screen flex items-center justify-center">
        <Card>
            <Form submitHandler={loginHandler}>
                <Label htmlFor="email" lab="Email" />
                <Input onChange={e => setEmail(e.target.value)} placeholder="Email" id="email" value={email} />

                <Label htmlFor="password" lab="Password" />
                <Input onChange={e => setPassword(e.target.value)} placeholder="Password" value={password} type="password" id="password" />

                <Button bg="indigo" val="Нэвтрэх" type="normal" />
            </Form>
        </Card>
    </div>
}

export default Login;


// 1. Хэрэглэгч нэвтрэнэ
// 2. Нийтлэл бичнэ.
// 3. Timeline үүсгээд бүх нийтлэлч нарын нийтлэлийг харуулна
// 4. Нийтлэлчийн профайл руу орох үед тухайн нийтлэлчийн нийтллэлүүд харагдана

// useReducer, useContext hook
// useSelector(state => state.loginReducer)
// useDispatch()
// reducer => state, action
// action => type
// Redux => state management
// <Provider store={combineReducer()}>
//      <App />
//      <Login />
// </Provider>