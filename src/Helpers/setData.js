export const handleSetData = () => {
    let existingUser = JSON.parse(localStorage.getItem("user"));
    let existingTestsData = JSON.parse(localStorage.getItem("created_tests"));

    if (!existingUser) {
        let dummyUserData = {
            id: 0,
            name: "Test User",
            email: "test@gmail.com",
            password: "test1234",
            isAuthed: false
        };
        localStorage.setItem("user", JSON.stringify(dummyUserData));
    }
    if (!existingTestsData) {
        localStorage.setItem("created_tests", JSON.stringify([]));
    }
}