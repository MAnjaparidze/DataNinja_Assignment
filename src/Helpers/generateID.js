export const handleGenerateID = (array) => {
    let newID = 0;
    if(array.length > 0) {
        newID = array[array.length - 1].id + 1;
    }

    return newID;
}