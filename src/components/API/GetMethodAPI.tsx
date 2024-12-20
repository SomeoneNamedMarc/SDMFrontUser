function GetMethodAPI(id) {
    return fetch(`https://localhost:7214/api/Method/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        return data;
    })
    .catch(error => {
        console.error("Error fetching the data:", error.message);
        throw error;
    });
}

export default GetMethodAPI;