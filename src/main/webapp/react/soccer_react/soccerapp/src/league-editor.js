import React from "react";
import {Link, Redirect, useParams} from "react-router-dom";
import leagueService from "./league-service"
const {useState, useEffect} = React;

const LeagueEditor = () => {
    const {id} = useParams()
    const [league, setLeague] = useState({})
    const [teams, setTeams] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if(id !== "new") {
            findLeagueTeamsById(id)
            findLeagueById(id)

        }
    }, []);
    const findLeagueById = (id) =>
        leagueService.findLeagueById(id)
            .then(league => setLeague(league))

    const findLeagueTeamsById = (id) =>
        leagueService.findLeagueTeamsById(id)
            .then(teams => {setTeams(teams)
            setLoading(false)})


    const deleteLeague = (id) =>
        leagueService.deleteLeague(id)

    const createLeague = (league) =>
        leagueService.createLeague(league)


    const updateLeague = (id, newLeague) =>
        leagueService.updateLeague(id, newLeague)


    const renderTeams = (teams) => {
        return (
            <ul>
                {teams.map((team) => <li>
                    <Link to={`/teams/${team.id}`}>
                        {team.teamName}
                    </Link>
                </li>)}
            </ul>
        )
    }

    console.log(league)
    console.log(teams)


    return (
        <div>
            <h2>League Editor</h2>
            <label>League Name</label>
            <input
                onChange={(e) =>
                    setLeague(league =>
                                ({...league, leagueName: e.target.value}))}
                value={league.leagueName}/>
            <label>Country</label>
            <input
                onChange={(e) =>
                    setLeague(league =>
                                ({...league, country : e.target.value}))}
                value={league.country}/>

            <label>Tier</label>
            <input
                onChange={(e) =>
                    setLeague(league =>
                                ({...league, tier: e.target.value}))}
                value={league.tier}/>
            <label>League Worth</label>
            <input
                onChange={(e) =>
                    setLeague(league =>
                                ({...league, leagueWorth: e.target.value}))}
                value={league.leagueWorth}/>
            <br/>
            <br/>
            <label> Teams </label>
            {loading ? 'Loading' : renderTeams(teams)}
            <br/>


            <Link to="/leagues">
                <button>
                    Cancel
                </button>
            </Link>
            <button
                onClick={() => deleteLeague(league.id)}>
                Delete
            </button>
            <button
                onClick={() => updateLeague(league.id, league)}>
                Save
            </button>
            <button
                onClick={() => createLeague(league)}>
                Create
            </button>


        </div>
    )
}

export default LeagueEditor