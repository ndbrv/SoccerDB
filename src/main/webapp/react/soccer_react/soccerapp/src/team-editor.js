import React from "react";
import {Link, Redirect, useParams} from "react-router-dom";
import teamService, {findTeamById} from "./team-service"
const {useState, useEffect} = React;

const TeamEditor = () => {
    const {id} = useParams()
    const [team, setTeam] = useState({})
    const [league, setLeague] = useState({})
    const [players, setPlayers] = useState({})
    const [leagueLoading, setLeagueLoading] = useState(true)
    const [playersLoading, setPlayersLoading] = useState(true)
    useEffect(() => {
        if(id !== "new") {
            findTeamById(id)
            findTeamLeagueById(id)
            findTeamPlayersById(id)
        }
    }, []);
    const findTeamById = (id) =>
        teamService.findTeamById(id)
            .then(team => setTeam(team))

    const findTeamLeagueById = (id) =>
        teamService.findTeamLeagueById(id)
            .then(league => {setLeague(league)
            setLeagueLoading(false)})

    const findTeamPlayersById = (id) =>
        teamService.findTeamPlayersById(id)
            .then(players => {setPlayers(players)
            setPlayersLoading(false)})

    const deleteTeam = (id) =>
        teamService.deleteTeam(id)

    const createTeam = (team) =>
        teamService.createTeam(team)


    const updateTeam = (id, newTeam) =>
        teamService.updateTeam(id, newTeam)

    const renderLeague = (league) => {
        return (
            <Link to={"/leagues/" + league.id}  >
                <button className="btn btn-warning">
                    League
                </button>
            </Link>
        )
    }

    const renderPlayers = (players) => {
        return (
            <ul>
                {players.map((player) => <li>
                    <Link to={`/players/${player.id}`}>
                        {player.firstName},
                        {player.lastName}
                    </Link>
                </li>)}
            </ul>
        )
    }


    return (
        <div>
            <h2>Team Editor</h2>
            <label>Team Name</label>
            <input
                onChange={(e) =>
                    setTeam(team =>
                                  ({...team, teamName: e.target.value}))}
                value={team.teamName}/>
            <label>Manager</label>
            <input
                onChange={(e) =>
                    setTeam(team =>
                                  ({...team, manager : e.target.value}))}
                value={team.manager}/>

            <label>Home Field</label>
            <input
                onChange={(e) =>
                    setTeam(team =>
                                  ({...team, homeField: e.target.value}))}
                value={team.homeField}/>
            <label>Team Worth</label>
            <input
                onChange={(e) =>
                    setTeam(team =>
                                ({...team, teamWorth: e.target.value}))}
                value={team.teamWorth}/>
            <br>
            </br>

            <br/>
            {leagueLoading ? ' Loading...' : renderLeague(league)}
            <br/>
            <br/>

            <label> Players </label>
            {playersLoading ? ' Loading...' : renderPlayers(players)}
            <br/>

            <Link to="/teams">
                <button>
                    Cancel
                </button>
            </Link>
            <button
                onClick={() => deleteTeam(team.id)}>
                Delete
            </button>
            <button
                onClick={() => updateTeam(team.id, team)}>
                Save
            </button>
            <button
                onClick={() => createTeam(team)}>
                Create
            </button>


        </div>
    )
}

export default TeamEditor