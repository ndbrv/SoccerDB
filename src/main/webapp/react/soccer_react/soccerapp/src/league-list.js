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
                <button type="button" className="btn btn-warning">
                    Create New League
                </button>
            </Link>


            <div className="list-group list-group-horizontal">
                <div className="list-group-item flex-fill">
                    League Name
                </div>
                <div className="list-group-item flex-fill">
                    Country
                </div>
                <div className="list-group-item flex-fill">
                    Tier
                </div>
                <div className="list-group-item flex-fill">
                    League Worth
                </div>
            </div>
            <ul className="list-group">
                {leagues.map(league =>
                               <li key={league.id} className="list-group-item">
                                   <Link to={`/leagues/${league.id}`}>

                                       <div className="list-group list-group-horizontal">
                                           <div className="list-group-item flex-fill">
                                               {league.leagueName}
                                           </div>
                                           <div className="list-group-item flex-fill">
                                               {league.country}
                                           </div>
                                           <div className="list-group-item flex-fill">
                                               {league.tier}
                                           </div>

                                           <div className="list-group-item flex-fill">
                                               {league.leagueWorth}
                                           </div>
                                       </div>
                                   </Link>
                               </li>)
                }

            </ul>
        </div>
    )
}

export default LeagueList;