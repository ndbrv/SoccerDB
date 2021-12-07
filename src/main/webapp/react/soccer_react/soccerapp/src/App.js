import logo from './logo.svg';
import './App.css';
import PlayerList from "./player-list";
import {Route, BrowserRouter, Routes, Link} from "react-router-dom";
import PlayerEditor from "./player-editor";
import TeamList from "./team-list";
import TeamEditor from "./team-editor";
import LeagueList from "./league-list";
import LeagueEditor from "./league-editor";
import React from "react";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Link to="/players">
               Player List
            </Link>
            <br/>
            <Link to="/teams">
                Team List
            </Link>
            <br/>
            <Link to="/leagues">
                League List
            </Link>
            <Routes>
                <Route path="/players" element={<PlayerList/>}/>
                <Route path="/players/:id" element={<PlayerEditor/>}/>
                <Route path="/teams" element={<TeamList/>}/>
                <Route path="/teams/:id" element={<TeamEditor/>}/>
                <Route path="/leagues" element={<LeagueList/>}/>
                <Route path="/leagues/:id" element={<LeagueEditor/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
