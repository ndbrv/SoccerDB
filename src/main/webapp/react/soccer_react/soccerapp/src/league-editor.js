import React from "react";
import {Redirect, useParams} from "react-router-dom";
import leagueService from "./league-service"
const {useState, useEffect} = React;

const LeagueEditor = () => {
    const {id} = useParams()
    const [league, setLeague] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findLeagueById(id)
        }
    }, []);
    const findLeagueById = (id) =>
        leagueService.findLeagueById(id)
            .then(team => setLeague(team))

    const deleteLeague = (id) =>
        leagueService.deleteLeague(id)

    const createLeague = (league) =>
        leagueService.createLeague(league)


    const updateLeague = (id, newLeague) =>
        leagueService.updateLeague(id, newLeague)


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


            <button>Cancel</button>
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