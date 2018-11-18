import { createStore, combineReducers, applyMiddleware } from 'redux';
import rootReducer from './reducers/RootReducer';
import promiseMiddleware from 'redux-promise-middleware';

const middleware = [promiseMiddleware()];

export default function configureStore(initialState={}) {
    return  createStore(combineReducers(rootReducer), initialState, applyMiddleware(...middleware));
}