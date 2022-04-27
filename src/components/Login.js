import './Login.css'
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { LoginAuthAction, ClearErrorAction } from '../app/actions/AuthAction';
import { useNavigate } from 'react-router-dom';

import HomePageUtils from "../api/HomePageUtils";

function Login(props) {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const {login, auth, error, clearError} = props 

     const handleSubmit = (e) => {
        if(error.hasError){
            clearError();
        }

        login({user: username, password: password}, navigate);
     }
    return (
        <div className="loginContainer">
            <div className="wrapper">
                <h1 className="grab">Log In</h1>
                <br />
                <input type="text" className= {error.hasError? 'csn-inp csn-expand inputError': "csn-inp csn-expand"}
                    name="username"
                    required
                    onChange={(e) => {
                        setUserName(e.target.value);
                    }}
                    placeholder="Username..." />
                <br />
                <input type="password" className= {error.hasError? 'csn-inp csn-expand inputError' : "csn-inp csn-expand"}
                    name="password"
                    required
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    placeholder="Password..." />
                <br />
                <br />
                 {error.errorMessage.length > 0 && <span>{error.errorMessage}<br/><br/></span>}
                 <div>
                    <button type="submit" className="csn-btn" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        error: state.authError,
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (loginState, navigate) => {
            dispatch(LoginAuthAction(loginState, navigate));
        },
        clearError: () => {
            dispatch(ClearErrorAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
