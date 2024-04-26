import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
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

  // Method to handle Register with axios request
  const handleRegister = async () => {
      try {
          let res = await axios.post('http://localhost:8080/users/register', {
              username: username,
              password: password
          }, {
              withCredentials: true
          });
          // Handle successful register
          console.log(res);
          if (res.status === 201) {
              navigate('/plans');
          }

      } catch (error: any) {
          // Handle Register error
          setShowError(true);
      }
  }


return (
  <div>
      <h1>Register</h1>
      <label>Username: 
          <input type="text" onChange={handleUsernameChange}/>
        {
          showError ? <p className='error-message'>Username or password incorrect!</p> : null
        }
      </label>

      <label>Password: 
          <input type="password"  onChange={handlePasswordChange}/>
      </label>

      <button onClick={handleRegister}>Register</button>
      {
          showError ? <p className='error-message'>Username or password incorrect!</p> : null
      }
  </div>
)
}

export default Register
