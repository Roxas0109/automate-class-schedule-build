import './Login.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className = "loginContainer">
            <div className="wrapper">
                <h1 className="grab">Log In</h1>
                <br />
                <input type="text" className="csn-inp csn-expand"
                    name="username"
                    onChange={(e)=>{
                        setUserName(e.target.value);
                    }}
                    placeholder="Username..."/>
                    <br />
                  <input type="password" className="csn-inp csn-expand"
                      name="password"
                      onChange={(e)=>{
                          setPassword(e.target.value);
                      }}
                      placeholder="Password..."/>
                    <br />
                    <br />
                    <Link to='/content'>
                        <button type="submit" className="csn-btn">Submit</button>
                    </Link>
            </div>
        </div>
    )
}
