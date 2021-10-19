export const handleCheckAuth = () => {
    let existingUser = JSON.parse(localStorage.getItem("user"));

    return existingUser ? existingUser.isAuthed : false;
}