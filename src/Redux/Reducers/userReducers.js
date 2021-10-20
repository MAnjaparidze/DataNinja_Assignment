import { AUTH_USER, GET_USER } from "../Actions/actionTypes";

const initState = {
    user: null
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                user: action.payload
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}