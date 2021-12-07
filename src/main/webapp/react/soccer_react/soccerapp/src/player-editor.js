import React from "react";
import {Redirect, useParams} from "react-router-dom";
import playerService from "./player-service"
const {useState, useEffect} = React;

const PlayerEditor = () => {
    const {id} = useParams()
    const [player, setPlayer] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findPlayerById(id)
        }
    }, []);
    const findPlayerById = (id) =>
        playerService.findPlayerById(id)
            .then(player => setPlayer(player))

    const deletePlayer = (id) =>
        playerService.deletePlayer(id)

    const createPlayer = (player) =>
        playerService.createPlayer(player)


    const updatePlayer = (id, newPlayer) =>
        playerService.updatePlayer(id, newPlayer)





    return (
        <div>
            <h2>Player Editor</h2>
            <label>First Name</label>
            <input
                onChange={(e) =>
                    setPlayer(player =>
                                ({...player, firstName: e.target.value}))}
                value={player.firstName}/>
            <label>Last Name</label>
            <input
                onChange={(e) =>
                    setPlayer(player =>
                                ({...player, lastName: e.target.value}))}
                value={player.lastName}/>

            <label>Username</label>
            <input
                onChange={(e) =>
                    setPlayer(player =>
                                ({...player, username: e.target.value}))}
                value={player.username}/>

            <label>Password</label>
            <input
                onChange={(e) =>
                    setPlayer(player =>
                                  ({...player, password: e.target.value}))}
                value={player.password}/>
            <label>Email</label>
            <input
                onChange={(e) =>
                    setPlayer(player =>
                                  ({...player, email: e.target.value}))}
                value={player.email}/>
            <label>Date of Birth</label>
            <input
                onChange={(e) =>
                    setPlayer(player =>
                                  ({...player, dateOfBirth: e.target.value}))}
                value={player.dateOfBirth}/>
            <label>Position</label>
            <input
                onChange={(e) =>
                    setPlayer(player =>
                                  ({...player, position: e.target.value}))}
                value={player.position}/>
            <button>Cancel</button>
            <button
                onClick={() => deletePlayer(player.id)}>
                Delete
            </button>

            <button
                onClick={() => updatePlayer(player.id, player)}>
                Save
            </button>
            <button
                onClick={() => createPlayer(player)}>
                Create
            </button>

        </div>
    )
}

export default PlayerEditor