import { AUTH_USER, BASE_USER } from "../Actions/actionTypes";

const initState = {
    user: {
        id: null,
        name: "",
        email: "",
        password: "",
        isAuthed: false
    }
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                user: action.payload
            }
        case BASE_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}