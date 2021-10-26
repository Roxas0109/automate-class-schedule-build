import './Login.css';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
        }
    }

    // using arrow functions to avoid binding
    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value,
        });
    }

    render() {
        return (
            <div className = "loginContainer">
                <div className="wrapper">
                    <h1>Log In</h1>
                    <br />
                    <form>
                        <label><b>Username</b>
                            <input type="text"
                                name="username" 
                                value={this.state.username} 
                                onChange={this.handleChange} 
                                placeholder="Username..."/>
                        </label>
                        <br />
                        <label><b>Password</b>
                            <input type="password" 
                                name="password"
                                value={this.state.password} 
                                onChange={this.handleChange} 
                                placeholder="Password..."/>
                        </label>
                        <br />
                        <Link to = "/upload">
                            <button className="submitbtn">Submit</button>
                        </Link>
                    </form>
                </div>
            </div>
        )
    }
}

