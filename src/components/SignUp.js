import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    useEffect(() => {
        const auth = localStorage.getItem("user");
        if (auth) {
            navigate("/")
        }
    }, [])

    const onClickSignup = async () => {
        try {
            const response = await axios.post("https://ecomm-rest-api.onrender.com/register", {
                name,
                email,
                password
            });
            console.log(response.data);
            localStorage.setItem("user", JSON.stringify(response))
            navigate("/")
        } catch (error) {
            console.error("Error during registration:", error);
        }
    };


    return (
        <div className='register'>
            <h1>
                Register
            </h1>
            <input
                className='inputbox'
                type='text'
                placeholder='Enter Name'
                value={name} onChange={(e) => setName(e.target.value)}
            />
            <input
                className='inputbox'
                type='text' placeholder='Enter Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className='inputbox'
                type='password'
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                className='appButton'
                type='button'
                onClick={() => onClickSignup()}>
                Sign Up
            </button>

        </div>
    )
}

export default SignUp