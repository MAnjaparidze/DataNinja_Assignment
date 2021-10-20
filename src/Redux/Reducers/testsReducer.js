import { SET_TESTS, SET_TEST } from "../Actions/actionTypes";

const initState = {
    tests: [],
    test: null
}

export default async function reducer(state = initState, action) {
    switch (action.type) {
        case SET_TESTS:
            return {
                ...state,
                tests: action.payload
            }
        case SET_TEST:
            return {
                ...state,
                test: action.payload
            }
        default:
            return state;
    }
}