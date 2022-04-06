import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../api/auth';
import HomePageUtils from '../api/HomePageUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavigationBar.css';
import { connect } from 'react-redux';
import { LogoutAuthAction } from '../app/actions/AuthAction';


function NavigationBar(props) {
    const [role, setRole] = useState('');

    const {auth, logout} = props;

    const handleLogout = (e) => {
        logout();
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
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(LogoutAuthAction()); 
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);