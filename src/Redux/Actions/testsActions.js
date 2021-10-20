import * as actions from './actionTypes';

export const setTests = async (testsData) => {
    return {
        type: actions.SET_TESTS,
        payload: testsData
    }
}

export const setTest = (testData) => {
    return {
        type: actions.SET_TEST,
        payload: testData
    }
}