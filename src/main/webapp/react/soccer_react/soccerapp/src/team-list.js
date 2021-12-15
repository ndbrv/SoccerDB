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
                <button type="button" className="btn btn-danger">
                    Create New Team
                </button>
            </Link>

            <div className="list-group list-group-horizontal">
                <div className="list-group-item flex-fill">
                    Team Name
                </div>
                <div className="list-group-item flex-fill">
                    Manager
                </div>
                <div className="list-group-item flex-fill">
                    Stadium
                </div>
                <div className="list-group-item flex-fill">
                    Club Worth
                </div>
            </div>

            <ul className="list-group">
                {teams.map(team =>
                                 <li className="list-group-item" key={team.id}>

                                         <Link to={`/teams/${team.id}`}>
                                             <div className="list-group list-group-horizontal">
                                             <div className="list-group-item flex-fill">
                                                 {team.teamName}
                                             </div>
                                             <div className="list-group-item flex-fill">
                                                 {team.manager}
                                             </div>
                                             <div className="list-group-item flex-fill">
                                                 {team.homeField}
                                             </div>

                                             <div className="list-group-item flex-fill">
                                                 {team.teamWorth}
                                             </div>
                                             </div>
                                         </Link>


                                 </li>)
                }

            </ul>
        </div>
    )
}

export default TeamList;