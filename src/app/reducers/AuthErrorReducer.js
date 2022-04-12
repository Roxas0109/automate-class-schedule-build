import { AuthActionsTypes } from "../actions/AuthAction"

const authError = {
    hasError: false,
    errorMessage: ""
}

const authErrorReducer = (state = authError, action) =>{
    switch(action.type){
        case AuthActionsTypes.LOGIN_FAIL: {
            return {hasError:true, errorMessage: action.payload};
        }
        case AuthActionsTypes.CLEAR_ERROR:
           return authError;
        default: {
            return state;
        }
    }
}

export default authErrorReducer;