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
                Create New Player
            </Link>
            <ul className="list-group">
                {players.map(player =>
                               <li key={player.id}>
                                   <Link to={`/players/${player.id}`}>
                                       {player.firstName},
                                       {player.lastName},
                                       {player.username},
                                       {player.email},
                                       {player.position}
                                   </Link>
                               </li>)
                }
            </ul>
        </div>
    )
}

export default PlayerList;