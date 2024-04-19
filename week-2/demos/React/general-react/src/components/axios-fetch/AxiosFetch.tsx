import React, { SyntheticEvent, useState } from 'react'
import './AxiosFetch.css'

export interface IUser {
    userId: number,
    username: string,
    password: string,
    role:string
}


function AxiosFetch() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [currentUser, setCurrentUser] = useState<IUser>()


    let updateUsername = (e:SyntheticEvent) => {
        setUsername( (e.target as HTMLInputElement).value )
    }

    let updatePassword = (e:SyntheticEvent) => {
        setPassword( (e.target as HTMLInputElement).value )
    }

    let loginWithFetch = async () => {
        // console.log({username, password})
        /*
        The Fetch API is one of the easiest ways to send HTTP requests from your frontend to your backend, we'll see an alternative soon called
        Axios which attempts to make things even cleaner but we'll hold off for now
        */

        let res = await fetch('http://localhost:8080/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        })
        .then((data) => data.json())
        .catch((error) => {
            alert("There was an error")
            console.log(error)
        })

        console.log(res);
        setCurrentUser(res)

    }


  return (
    <div className='loginForm'>
    
        <label>Username: <input id='username-input' type='text' onChange={updateUsername}></input></label>

        <label>Password: <input id='password-input' type='password' onChange={updatePassword}></input></label>

        <button onClick={loginWithFetch}>Login with fetch!</button>

        <h3>Logged in User: {currentUser?.username}</h3>
      
    </div>
  )
}

export default AxiosFetch
