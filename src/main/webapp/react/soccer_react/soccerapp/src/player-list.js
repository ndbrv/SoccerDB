const {Link, useHistory} = window.ReactRouterDOM;
import userService from "./user-service"
const { useState, useEffect } = React;

const PlayerList = () => {
    const history = useHistory();
    const [players, setPlayers] = useState([])
    useEffect(() => {
        findAllPlayers()
    }, [])
    const findAllPlayers = () =>
        userService.findAllPlayers()
            .then(players => setPlayers(players))

    return(
        <div>
            <h2>Player List</h2>
            <button onClick={() => history.push("/users/new")}>
                Add User
            </button>
            <ul className="list-group">
                {players.map(player =>
                               <li key={player.id}>
                                   <Link to={`/players/${player.id}`}>
                                       {player.firstName},
                                       {player.lastName},
                                       {player.username}
                                   </Link>
                               </li>)
                }

            </ul>
        </div>
    )
}

export default PlayerList;