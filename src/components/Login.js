import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const auth = localStorage.getItem("user");
        if (auth) {
            navigate("/")
        }
    }, [])

    const onClickLogin = async () => {
        try {
            const response = await axios.post("http://localhost:4000/login", {
                email,
                password
            });
            console.log(response.data);
            if (response?.data?.name) {
                localStorage.setItem("user", JSON.stringify(response?.data))
                navigate("/")
            } else {
                alert("Please enter valid details")
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    }
    return (
        <div className='login'>
            <h1>
                Login
            </h1>
            <input
                type='text'
                placeholder='Enter Email'
                className='inputbox'
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type='password'
                placeholder='Enter Password'
                className='inputbox'
                onChange={(e) => setPassword(e.target.value)}

            />
            <button
                type='button'
                className='appButton'
                onClick={() => onClickLogin()}
            >
                Login
            </button>


        </div>
    )
}

export default Login