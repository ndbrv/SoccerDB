import React from "react";
import {Redirect, useParams} from "react-router-dom";
import teamService, {findTeamById} from "./team-service"
const {useState, useEffect} = React;

const TeamEditor = () => {
    const {id} = useParams()
    const [team, setTeam] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findTeamById(id)
        }
    }, []);
    const findTeamById = (id) =>
        teamService.findTeamById(id)
            .then(team => setTeam(team))

    const deleteTeam = (id) =>
        teamService.deleteTeam(id)

    const createTeam = (team) =>
        teamService.createTeam(team)


    const updateTeam = (id, newTeam) =>
        teamService.updateTeam(id, newTeam)


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
            <label> League ID</label>
            <input
                onChange={(e) =>
                    setTeam(team =>
                                ({...team, league: e.target.value}))}
                value={team.league}/>

            <button>Cancel</button>
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