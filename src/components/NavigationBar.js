import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../api/auth';
import HomePageUtils from '../api/HomePageUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavigationBar.css';


export default function NavigationBar() {
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const handleLogout = (e) => {
        fetch("http://localhost:80/api/logout", { method: "POST", credentials: 'include' }).then((res) => {
            localStorage.clear();
            navigate('/')
        }).catch((err) =>
            console.error(err)
        );

    }

    return (
        <div className='nav-container'>
            <nav>
                <h1 className="title-name"> Projected Schedule Planner</h1>
                <div className='button-contaniner'>
                    <button type='submit' className="sign-out navButton" onClick={handleLogout}><FontAwesomeIcon icon="sign-out-alt" /> Sign Out</button>
                </div>
            </nav>
        </div>
    )
}