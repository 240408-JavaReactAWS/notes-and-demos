import axios from 'axios';
import React, { useState } from 'react'
import './Login.css';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';




function Login() {

    // use navigate hook
    const navigate = useNavigate();
    

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);

    // handle change method for username/password input
    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    // Method to handle login with axios request
    const handleLogin = async () => {
        try {
            let res = await axios.post('http://localhost:8080/users/login', {
                username: username,
                password: password
            }, {
                withCredentials: true
            });
            // Handle successful login
            console.log(res);
            if (res.status === 200) {
                navigate('/plans');
            }

        } catch (error) {
            // Handle login error
            setShowError(true);
        }
    }


  return (
    <div className="login-container">
        <h1 className="login-title">Login</h1>
        <label className="login-label">Username: 
            <input type="text" onChange={handleUsernameChange} className="login-input"/>
        </label>

        <label className="login-label">Password: 
            <input type="password"  onChange={handlePasswordChange} className="login-input"/>
        </label>

        <button onClick={handleLogin} className="login-button">Login</button>
        {
            showError ? <p className='error-message'>Username or password incorrect!</p> : null
        }
    </div>
  )
}

export default Login

