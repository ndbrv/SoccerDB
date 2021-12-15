// TODO: declare URL where server listens for HTTP requests
const TEAMS_URL = "http://localhost:8080/api/teams"

// TODO: retrieve all teams from the server
export const findAllTeams = () =>
    fetch(TEAMS_URL)
        .then(response => response.json())



// TODO: retrieve a single team by their ID
export const findTeamById = (id) =>
    fetch(`${TEAMS_URL}/${id}`)
        .then(response => response.json())

export const findTeamLeagueById = (id) =>
    fetch(`${TEAMS_URL}/${id}/league`)
        .then(response => response.json())

export const findTeamPlayersById = (id) =>
    fetch(`${TEAMS_URL}/${id}/players`)
        .then(response => response.json())


// TODO: delete a team by their ID
export const deleteTeam = (id) =>
    fetch(`${TEAMS_URL}/${id}`, {
        method: "DELETE"
    })


// TODO: create a new team
export const createTeam = (team) =>
    fetch(TEAMS_URL, {
        method: 'POST',
        body: JSON.stringify(team),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// TODO: update a team by their ID
export const updateTeam = (id, team) =>
    fetch(`${TEAMS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(team),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


// TODO: export all functions as the API to this service
export default {
    findAllTeams,
    findTeamById,
    findTeamLeagueById,
    findTeamPlayersById,
    deleteTeam,
    createTeam,
    updateTeam
}