import { handleGenerateID } from '../Helpers/generateID';

export const handleAddTest = (testObj) => {
    return new Promise((resolve, reject) => {
        let array = JSON.parse(localStorage.getItem("created_tests"));
        let objID = handleGenerateID(array);
        let testObjToAdd = {
            ...testObj,
            id: objID
        }
        array.push(testObjToAdd);

        localStorage.setItem("created_tests", JSON.stringify(array));

        resolve({ status: 200, message: "Test Added Successfully", data: testObjToAdd });
    })
}

export const handleGetCreatedTests = (userID) => {
    return new Promise((resolve, reject) => {
        let array = JSON.parse(localStorage.getItem("created_tests"));

        // Imitation of Filtering the Array Based on the User
        let filteredArray = array.filter(item => item.author === userID);

        resolve({ status: 200, data: filteredArray });
    })
}

export const handleGetTest = (testID) => {
    return new Promise((resolve, reject) => {
        let array = JSON.parse(localStorage.getItem("created_tests"));
        let testItem = array.find(test => test.id === testID);
        resolve(testItem);
    })
}