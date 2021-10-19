export const handleSetUser = () => {
    let existingUser = JSON.parse(localStorage.getItem("user"));
    
    if(!existingUser) {
        let dummyUserData = {
            name: "Test User",
            email: "test@gmail.com",
            password: "test1234",
            isAuthed: false
        };
        localStorage.setItem("user", JSON.stringify(dummyUserData));
    }
}