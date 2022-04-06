import { useNavigate } from "react-router-dom";
import HomePageUtils from "./../../api/HomePageUtils";

export const AuthActionsTypes = {
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAIL: "LOGIN_FAIL",
    LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
    LOGOUT_FAIL: "LOGOUT_FAIL"
}

export const LoginAuthAction = (loginState) =>{
    return async (dispatch) => {
        try{
            const data = await fetch("http://localhost:80/api/login", {body: JSON.stringify(loginState), method: "POST", headers: {"Content-Type": "application/json"}, credentials: 'include',});
            const res = await data.json();
            dispatch({type: AuthActionsTypes.LOGIN_SUCCESS, payload: res});
            window.history.pushState({}, undefined, "/content");
        } catch(error){
            dispatch({type: AuthActionsTypes.LOGIN_FAIL, payload: {}});
        }
    }
}

// localStorage.setItem("token", JSON.stringify(data));


export const LogoutAuthAction = () => {
    return async (dispatch) => {
        try{
            //chanege url, 
           dispatch({type: AuthActionsTypes.LOGOUT_SUCCESS, payload: {} });
        }catch(error){
            console.log(error);
            dispatch({type: AuthActionsTypes.LOGOUT_FAIL, payload: {} });
        }
    }
}