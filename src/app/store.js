import { createStore, applyMiddleware, compose, combineReducers} from '@reduxjs/toolkit';
import authReducer  from './reducers/AuthReducer';
import authErrorReducer from './reducers/AuthErrorReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    auth: authReducer,
    authError: authErrorReducer
});

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);