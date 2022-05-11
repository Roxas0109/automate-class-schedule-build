export const AuthActionsTypes = {
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAIL: "LOGIN_FAIL",
    LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
    LOGOUT_FAIL: "LOGOUT_FAIL",
    CLEAR_ERROR: "CLEAR_ERROR"
}

export const LoginAuthAction = (loginState, navigate) =>{
    return async (dispatch) => {
        try{
            const data = await fetch("http://localhost:80/api/login", {body: JSON.stringify(loginState), method: "POST", headers: {"Content-Type": "application/json"}, credentials: 'include'});
            const res = await data.json();

            if(res.status === "success"){
                dispatch({type: AuthActionsTypes.LOGIN_SUCCESS, payload: res});
                navigate("/");
             } else{
                dispatch({type: AuthActionsTypes.LOGIN_FAIL, payload: res.error});
            }
        } catch(error){
            let payload = "Something Went Wrong!"
           dispatch({type: AuthActionsTypes.LOGIN_FAIL, payload: payload});
        }
    }
}

export const ClearErrorAction = () => {
    return (dispatch) => {
     dispatch({type: AuthActionsTypes.CLEAR_ERROR, payload: {}});
    }
}


export const LogoutAuthAction = () => {
    return (dispatch) => {
        try{
           dispatch({type: AuthActionsTypes.LOGOUT_SUCCESS, payload: {} });
        }catch(error){
            console.log(error);
            dispatch({type: AuthActionsTypes.LOGOUT_FAIL, payload: {} });
        }
    }
}
