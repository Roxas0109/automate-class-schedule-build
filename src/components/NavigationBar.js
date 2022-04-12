import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavigationBar.css';
import { connect } from 'react-redux';
import { LogoutAuthAction } from '../app/actions/AuthAction';


function NavigationBar(props) {
    const {auth, logout} = props;
    const navigate = useNavigate();

    const handleLogout = (e) => {
        logout();
        navigate("/");
    }
    return (
        <div className='nav-container'>
            <nav>
                <h1 className="title-name"> Projected Schedule Planner</h1>
                <div className='button-contaniner'>
                    <button type='submit' className="sign-out navButton" onClick={handleLogout}><FontAwesomeIcon icon="sign-out-alt" /> Sign Out</button>
                    {(auth.user.role == "admin") &&
                        <button type='submit' className="sign-out navButton" onClick={handleLogout}><FontAwesomeIcon icon="sign-out-alt" /> LOL</button> }
                </div>
            </nav>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
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