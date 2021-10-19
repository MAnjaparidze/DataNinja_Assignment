import * as actions from './actionTypes';

export const getUser = () => {
    let existingUser = JSON.parse(localStorage.getItem("user"));
    let dummyUser = {
        id: 0,
        name: "Test User",
        email: "test@gmail.com",
        password: "test1234",
        isAuthed: false
    }

    return {
        type: actions.BASE_USER,
        payload: existingUser ? existingUser : dummyUser
    }
}

export const authUser = (userObj) => {
    console.log(userObj, "<=== Updated");
    userObj.isAuthed = true;
    localStorage.setItem("user", JSON.stringify(userObj));
    window.location.href = "/userTests";
    return {
        type: actions.AUTH_USER,
        payload: userObj
    }
}