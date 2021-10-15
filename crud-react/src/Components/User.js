import React , { useEffect , useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const User = () => {
    // const 
    const { search } = useLocation();
    const { id } = queryString.parse(search);
    
    const getUserData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
        const data = await res.json();
        console.log(data);
    }

    useEffect(() => {
        getUserData();
    }, []);

    return <div className="w-full h-screen bg-red-400 text-white flex justify-center items-center">
        <h1 className="text-5xl">It Worked</h1>
    </div>
}

export default User;