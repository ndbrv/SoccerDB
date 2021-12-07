// TODO: declare URL where server listens for HTTP requests
const PLAYERS_URL = "http://localhost:8080/api/players"

// TODO: retrieve all users from the server
export const findAllPlayers = () =>
    fetch(PLAYERS_URL)
        .then(response => response.json())



// TODO: retrieve a single user by their ID
export const findPlayerById = (id) =>
    fetch(`${PLAYERS_URL}/${id}`)
        .then(response => response.json())


// TODO: delete a user by their ID
export const deletePlayer = (id) =>
    fetch(`${PLAYERS_URL}/${id}`, {
        method: "DELETE"
    })


// TODO: create a new user
export const createPlayer = (player) =>
    fetch(PLAYERS_URL, {
        method: 'POST',
        body: JSON.stringify(player),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// TODO: update a user by their ID
export const updatePlayer = (id, player) =>
    fetch(`${PLAYERS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// TODO: export all functions as the API to this service
export default {
    findAllPlayers,
    findPlayerById,
    deletePlayer,
    createPlayer,
    updatePlayer
}