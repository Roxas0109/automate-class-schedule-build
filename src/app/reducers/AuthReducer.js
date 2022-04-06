import { AuthActionsTypes } from "../actions/AuthAction"

export const authState = {
    isLoginIn: false,
    user:{
        ID: null,
        name: null,
        token: null,
        role: null,
    }
}

const ifuserisstilldd = () =>{
    
}


const authReducer = (state = authState, action) => {
    switch(action.type){
        case AuthActionsTypes.LOGIN_SUCCESS: {
            const loginState = {
                isLoginIn: true,
                user:{
                    ID: 1,
                    name: action.payload.user.username,
                    token: action.payload.token,
                    role: action.payload.role,
                }
            }   
            localStorage.setItem("token", JSON.stringify(action.payload.token));
            return loginState;
        }

        case AuthActionsTypes.LOGIN_FAIL: {
            console.log(state);
            return state;
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