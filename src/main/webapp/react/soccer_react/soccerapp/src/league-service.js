// TODO: declare URL where server listens for HTTP requests
const LEAGUES_URL = "http://localhost:8080/api/leagues"

// TODO: retrieve all leagues from the server
export const findAllLeagues = () =>
    fetch(LEAGUES_URL)
        .then(response => response.json())



// TODO: retrieve a single league by its ID
export const findLeagueById = (id) =>
    fetch(`${LEAGUES_URL}/${id}`)
        .then(response => response.json())


// TODO: delete a league by its ID
export const deleteLeague = (id) =>
    fetch(`${LEAGUES_URL}/${id}`, {
        method: "DELETE"
    })


// TODO: create a new league
export const createLeague = (league) =>
    fetch(LEAGUES_URL, {
        method: 'POST',
        body: JSON.stringify(league),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// TODO: update a league by their ID
export const updateLeague = (id, league) =>
    fetch(`${LEAGUES_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(league),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// TODO: export all functions as the API to this service
export default {
    findAllLeagues,
    findLeagueById,
    deleteLeague,
    createLeague,
    updateLeague
}