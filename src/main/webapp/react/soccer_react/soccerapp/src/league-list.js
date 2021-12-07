import React from "react";
import leagueService from "./league-service";
import ReactDOM, {Link, Router} from 'react-router-dom';
const { useState, useEffect } = React;

const LeagueList = () => {
    const [leagues, setLeagues] = useState([])
    useEffect(() => {
        leagueService.findAllLeagues()
            .then(leagues => setLeagues(leagues))
    }, [])



    return(
        <div>
            <h2>League List</h2>
            <Link to="/leagues/new">
                Create New League
            </Link>
            <ul className="list-group">
                {leagues.map(league =>
                               <li key={league.id}>
                                   <Link to={`/leagues/${league.id}`}>
                                       {league.leagueName},
                                       {league.country},
                                       {league.tier},
                                       {league.leagueWorth}
                                   </Link>
                               </li>)
                }

            </ul>
        </div>
    )
}

export default LeagueList;