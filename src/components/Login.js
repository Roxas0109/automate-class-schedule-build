import './Login.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className = "loginContainer">
            <div className="wrapper">
                <h1>Log In</h1>
                <br />
                    <label className="fLabel"><b>Username</b>
                        <input type="text" className="uInput"
                            name="username"
                            onChange={(e)=>{
                                setUserName(e.target.value);
                            }}
                            placeholder="Username..."/>
                    </label>
                    <br />
                    <label className="fLabel"><b>Password</b>
                        <input type="password" className="uInput"
                            name="password"
                            onChange={(e)=>{
                                setPassword(e.target.value);
                            }}
                            placeholder="Password..."/>
                    </label>
                    <br />
                    <Link to='/content'>
                        <button type="submit" className="redBtn">Submit</button>
                    </Link>
            </div>
        </div>
    )
}
