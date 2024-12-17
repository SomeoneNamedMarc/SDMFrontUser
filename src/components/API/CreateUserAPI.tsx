

function CreateUser(Username: string, Password: string, Email: string, CompanyName: string, FirstName: string, LastName: string ) {
    const newUser = {
        Username,
        Password,
        Email,
        CompanyName,
        FirstName,
        LastName,
    };

    return fetch("https://localhost:7214/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
    })
    .then(response => {
        if (!response.ok) {
            if (response.status === 409) {
                return response.json().then(error => {
                    throw new Error(error.message);
                });
            }
            throw new Error("Failed to create user");
        }
        return response.json();
    })
    .then(data => {
        console.log("User created successfully:", data);
        return data;
    })
    .catch(error => {
        console.error("Error:", error.message);
        throw error;
    });
}

export default CreateUser;