import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavigationBar.css';
import { connect } from 'react-redux';
import { LogoutAuthAction } from '../app/actions/AuthAction';


function NavigationBar(props) {
    const { auth, logout } = props;
    const navigate = useNavigate();

    const handleLogout = (e) => {
        logout();
        navigate("/");
    }
    return (
        <nav className='nav-container'>
            <h1 className="title-name"> Projected Schedule Planner</h1>
            <button type='submit' className="navButton csn-btn" onClick={handleLogout}>
                <FontAwesomeIcon icon="sign-out-alt" className='csn-btn-icon-inline' /> Sign Out</button>
        </nav>
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