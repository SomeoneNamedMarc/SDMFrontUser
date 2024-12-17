

function Login(Username: string, Password: string ) {
    const requestInfo = {
        Username,
        Password,
    };

    return fetch("https://localhost:7214/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestInfo),
    })
    .then(response => {
        if (!response.ok) {
            if (response.status === 409) {
                return response.json().then(error => {
                    throw new Error(error.message);
                });
            }
            throw new Error("Incorrect username or password");
        }
        return response.json();
    })
    .then(data => {
        console.log("Login was successful:", data);
        return data;
    })
    .catch(error => {
        console.error("Error:", error.message);
        throw error;
    });
}

export default Login;