// TODO: declare URL where server listens for HTTP requests
const PLAYERS_URL = "http://localhost:8080/api/players"

// TODO: retrieve all players from the server
export const findAllPlayers = () =>
    fetch(PLAYERS_URL)
        .then(response => response.json())



// TODO: retrieve a single player by their ID
export const findPlayerById = (id) =>
    fetch(`${PLAYERS_URL}/${id}`)
        .then(response => response.json())

export const findPlayerTeamById = (id) =>
    fetch(`${PLAYERS_URL}/${id}/team`)
        .then(response => response.json())


// TODO: delete a player by their ID
export const deletePlayer = (id) =>
    fetch(`${PLAYERS_URL}/${id}`, {
        method: "DELETE"
    })


// TODO: create a new player
export const createPlayer = (player) =>
    fetch(PLAYERS_URL, {
        method: 'POST',
        body: JSON.stringify(player),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// TODO: update a player by their ID
export const updatePlayer = (id, player) =>
    fetch(`${PLAYERS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(player),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// TODO: export all functions as the API to this service
export default {
    findAllPlayers,
    findPlayerById,
    findPlayerTeamById,
    deletePlayer,
    createPlayer,
    updatePlayer
}