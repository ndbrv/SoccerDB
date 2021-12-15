import React from "react";
import playerService from "./player-service";
import ReactDOM, {Link, Router} from 'react-router-dom';
const { useState, useEffect } = React;

const PlayerList = () => {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        playerService.findAllPlayers()
            .then(players => setPlayers(players))
    }, [])



    return(
        <div>
            <h2>Player List</h2>

                <Link to="/players/new">
                    <button type="button" className="btn btn-success">
                        Create New Player
                    </button>
                </Link>

            <div className="list-group list-group-horizontal">
                <div className="list-group-item flex-fill">
                    First Name
                </div>
                <div className="list-group-item flex-fill">
                    Last Name
                </div>
                <div className="list-group-item flex-fill">
                    Username
                </div>
                <div className="list-group-item flex-fill">
                    Email
                </div>
                <div className="list-group-item flex-fill">
                    Position
                </div>
            </div>

            <ul className="list-group">
                {players.map(player =>
                               <li key={player.id} className="list-group-item">
                                   <Link to={`/players/${player.id}`}>




                                       <div className="list-group list-group-horizontal">
                                           <div className="list-group-item flex-fill">
                                               {player.firstName}
                                           </div>
                                           <div className="list-group-item flex-fill">
                                               {player.lastName}
                                           </div>
                                           <div className="list-group-item flex-fill">
                                               {player.username}
                                           </div>

                                           <div className="list-group-item flex-fill">
                                               {player.email}
                                           </div>
                                           <div className="list-group-item flex-fill">
                                               {player.position}
                                           </div>
                                       </div>
                                   </Link>
                               </li>)
                }
            </ul>
        </div>
    )
}

export default PlayerList;