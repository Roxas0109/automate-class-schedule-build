import './Login.css'
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { LoginAuthAction } from '../app/actions/AuthAction';
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const [username, setUserName] = useState('');
    const [userError, setUserError] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [error, setError ] = useState('');

    const navigate = useNavigate();

    const {login} = props 

     const handleSubmit = (e) => {
        login({user: username, password: password}, navigate);
     }

    //  const handleSubmit = (e) => {

    //     if(username.length == 0 || password.length == 0){

    //         if(username.length == 0)
    //             setUserError(true);

    //         if(password.length == 0){ 
    //             setPasswordError(true);
    //         }

    //         setError("Username or Password is empty!!");
    //         return;
    //     }

    //     let body = {
    //         user: username,
    //         password: password
    //     };

    //     HomePageUtils.postAndCallback("/api/login", JSON.stringify(body), (data) => {
    //         if (data.status === "success") {
    //             localStorage.setItem("token", JSON.stringify(data));

    //             if(getRole())
    //                 navigate("/content/admin");
    //             else
    //                 navigate("/content");
    //         }
    //         else {
    //             setError(data.error);

    //         }
    //     }, { "Content-Type": "application/json" });
    // }

    // const getRole = () => {
    //     let tempRole = tokenPayload();
              
    //     if(tempRole ==  null){
    //         return;
    //     }

    //     if(tempRole.role == "admin"){
    //        return true
    //     }
    //     else return false


    // };

    // const tokenPayload = () =>{
    //     let object = (localStorage.getItem('token'));

    //     if(!object){
    //         return null;
    //     }

    //     object = JSON.parse(object)

    //     if(object['token']){
    //         return decode(object['token']);
    //     }
    // }

    return (
        <div className="loginContainer">
            <div className="wrapper">
                <h1 className="grab">Log In</h1>
                <br />
                <input type="text" className= {userError? 'csn-inp csn-expand inputError': "csn-inp csn-expand"}
                    name="username"
                    required
                    onChange={(e) => {
                        setUserName(e.target.value);
                    }}
                    placeholder="Username..." />
                <br />
                <input type="password" className= {passwordError? 'csn-inp csn-expand inputError' : "csn-inp csn-expand"}
                    name="password"
                    required
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    placeholder="Password..." />
                <br />
                <br />
                 {error.length > 0 && <span>{error}<br/><br/></span>}
                 <div>
                    <button type="submit" className="csn-btn" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (loginState, navigate) => {
            dispatch(LoginAuthAction(loginState, navigate));
        }
    }
}

export default connect(null, mapDispatchToProps)(Login);
