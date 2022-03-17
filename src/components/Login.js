import './Login.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HomePageUtils from "./../api/HomePageUtils";

export default function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError ] = useState('');

    const navigate = useNavigate();

     const handleSubmit = (e) => {

        if(username.length == 0 || password.length == 0){
            setError("Username or Password is empty!!");
            return;
        }

        let body = {
            user: username,
            password: password
        };

        HomePageUtils.postAndCallback("/api/login", JSON.stringify(body), (data) => {
            if (data.status === "success") {
                localStorage.setItem("token", JSON.stringify(data));
                navigate("/content");
            }
            else {
                setError(data.error);
            }
        }, { "Content-Type": "application/json" });
    }


    return (
        <div className="loginContainer">
            <div className="wrapper">
                <h1 className="grab">Log In</h1>
                <br />
                <input type="text" className="csn-inp csn-expand"
                    name="username"
                    required
                    onChange={(e) => {
                        setUserName(e.target.value);
                    }}
                    placeholder="Username..." />
                <br />
                <input type="password" className="csn-inp csn-expand"
                    name="password"
                    required
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    placeholder="Password..." />
                <br />
                <br />
                {error.length > 0 && <span>{error}<br/></span>}
                <button type="submit" className="csn-btn" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}
