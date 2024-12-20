
export const assignMethodologyToCurrentUser = (methodId, user, setUser, login) => {
    if (!user || !user.id) {
        throw new Error("User is not authenticated or user ID is missing.");
    }

    const getMethodologyById = (methodId) => {
        return fetch("https://localhost:7214/api/Method/" + methodId, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch methodology with ID " + methodId + ".");
            }
            return response.json();
        });
    };

    return getMethodologyById(methodId)
        .then(methodology => {
            return fetch("https://localhost:7214/api/users/" + user.id + "/methodology", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(methodology),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to assign methodology to user with ID " + user.id + ".");
                }
                return response.json();
            })
            .then(() => methodology);
        })
        .then(methodology => {
            const newUser = { ...user, method: methodology};
            setUser(newUser);
            login(newUser, user.token);
        })        
        .catch(error => {
            throw error;
        });
};
