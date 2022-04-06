import { createStore, applyMiddleware, compose} from '@reduxjs/toolkit';
import authReducer  from './reducers/AuthReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    authReducer,
    composeEnhancers(applyMiddleware(thunk))
);