import { combineReducers } from "redux";
import userReducer from './userReducers.js';
import testsReducer from './testsReducer';

export default combineReducers({
    userReducer,
    testsReducer
})