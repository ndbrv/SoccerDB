import React from "react";
import teamService from "./team-service";
import ReactDOM, {Link, Router} from 'react-router-dom';
const { useState, useEffect } = React;

const TeamList = () => {
    const [teams, setTeams] = useState([])
    useEffect(() => {
        teamService.findAllTeams()
            .then(teams => setTeams(teams))
    }, [])



    return(
        <div>
            <h2>Team List</h2>
            <Link to="/teams/new">
                Create New Team
            </Link>
            <ul className="list-group">
                {teams.map(team =>
                                 <li key={team.id}>
                                     <Link to={`/teams/${team.id}`}>
                                         {team.teamName},
                                         {team.manager},
                                         {team.homeField},
                                         {team.teamWorth}
                                     </Link>
                                 </li>)
                }

            </ul>
        </div>
    )
}

export default TeamList;