import * as actions from './actionTypes';

export const authUser = (userObj) => {
    userObj.isAuthed = true;
    localStorage.setItem("user", JSON.stringify(userObj));
    window.location.href = "/userTests";
    return {
        type: actions.AUTH_USER,
        payload: userObj
    }
}

export const getUser = () => {
    let userObj = JSON.parse(localStorage.getItem("user"));
    return {
        type: actions.GET_USER,
        payload: userObj
    }
}