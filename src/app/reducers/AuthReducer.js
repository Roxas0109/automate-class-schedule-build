import jwt_decode from "jwt-decode";
import { AuthActionsTypes } from "../actions/AuthAction"

export const authState = {
    isLoginIn: false,
    user: {
        ID: null,
        name: null,
        token: null,
        role: null,
    }
}

const tokenPayload = () => {
    let object = (localStorage.getItem('token'));

    if (!object) {
        return null;
    }


    object = JSON.parse(object)
    const decode = jwt_decode(object);

    if(decode != null)
        return decode
}

const getState = () =>{
    const token = tokenPayload();

    if(token == null)
        return authState;

    if(new Date(token.exp) * 1000 < new Date().getTime()){
        localStorage.clear();
        return authState;
    }
    else{
        const persistentState = {
            isLoginIn: true,
            user: {
                ID: token.ID,
                name: token.username,
                role: token.role
            }
        }
        return persistentState
    }
}

getState();

const authReducer = (state = getState(), action) => {
    switch (action.type) {
        case AuthActionsTypes.LOGIN_SUCCESS: {
            const loginState = {
                isLoginIn: true,
                user: {
                    ID: action.payload.user.ID,
                    name: action.payload.user.username,
                    role: action.payload.user.role,
                }
            }
            localStorage.setItem("token", JSON.stringify(action.payload.token));
            return loginState;
        }

        case AuthActionsTypes.LOGOUT_SUCCESS: {
            localStorage.clear();
            return authState;
        }
        case AuthActionsTypes.LOGOUT_FAIL: {
            localStorage.clear();
            return authState;
        }
        default:
            return state;
    }

}

export default authReducer;