export const existingReservations = () => {
    return fetch("http://localhost:3001/api/v1/reservations")
        .then(response => response.json())
        .catch(error => alert('Something went wrong.  Please try again later'));
}

export const makeNewReservation = (object) => {
    return fetch("http://localhost:3001/api/v1/reservations", {
        method: "POST",
        body: JSON.stringify(object),
        headers: {
            "Content-type": "application/json"
        },
    }).then(response => response.json())
    .catch(error => alert('Something went wrong.  Please try again later'));
};

export const deleteReservation = (id) => {
    return fetch(`http://localhost:3001/api/v1/reservations/:${id}`, {
        method: "DELETE"
    })
};