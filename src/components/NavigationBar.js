import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../api/auth';
import HomePageUtils from '../api/HomePageUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {decode} from 'jsonwebtoken'
import './NavigationBar.css';


export default function NavigationBar() {
    const [role, setRole] = useState('');
    const navigate = useNavigate();
        
    const handleLogout = (e) =>{
        fetch("http://localhost:80/api/logout", { method: "POST", credentials: 'include' }).then((res) =>{
            localStorage.clear();
            console.log("logout");
            navigate('/')
          }).catch((err) => console.error(err))
    
        }
    

    useEffect(() =>{
        console.log("Effect working");
        window.addEventListener('storage', getRole);
        getRole();
    })

    const getRole = () => {
        let tempRole = tokenPayload();
              
        if(tempRole ==  null){
            return;
        }

        if(tempRole.role != role){
            setRole(tempRole.role);
        }


    };

    const tokenPayload = () =>{
        console.log((localStorage.getItem('token')));

        let object = (localStorage.getItem('token'));

        if(!object){
            return null;
        }

        object = JSON.parse(object)

        if(object['token']){
            return decode(object['token']);
        }
    }

    return (
        <div className='nav-container'>
            <nav>
                <h1 className="title-name"> Projected Schedule Planner</h1>
                <div className='button-contaniner'>
                    {role === "admin" &&
                        <button type='submit' className="navButton" onClick={()=> navigate("content/admin")}>Department</button>
                    }

                    <button type='submit' className="sign-out navButton" onClick={handleLogout}><FontAwesomeIcon icon="sign-out-alt"/> Sign Out</button>
                </div>
            </nav>
        </div>
    )
}