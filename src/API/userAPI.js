export const handleGetUser = (credentials) => {
    let existingUser = JSON.parse(localStorage.getItem("user"));

    const responses = {
        email: { type: "emailError", status: 400, message: "Email is Incorrect" },
        password: { type: "passwordError", status: 400, message: "Password is Incorrect" },
        success: { status: 200, message: "You are authenticated", data: existingUser }
    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (let prop in credentials) {
                if (credentials[prop] !== existingUser[prop]) {
                    return reject(responses[prop]);
                }
            }
            return resolve(responses.success);
        }, 2000);
    })

}