import PlayerList from "../soccer_react/soccerapp/src/player-list";
import React from 'react';
import ReactRouterDOM from 'react-router-dom';
const {HashRouter, Route} = window.ReactRouterDOM;
const App = () => {
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/players", "/"]} exact={true}>
                    <PlayerList/>
                </Route>
                {/*<Route path="/users/:id" exact={true}>*/}
                {/*    <UserFormEditor/>*/}
                {/*</Route>*/}
            </HashRouter>
        </div>
    );
}

export default App;