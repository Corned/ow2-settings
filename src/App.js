import { useState } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Navigation from "./Navigation"

import VideoPage from "./pages/Video"
import SoundPage from "./pages/Sound"
import ControlsPage from "./pages/Controls"
import GameplayPage from "./pages/Gameplay"
import SocialPage from "./pages/Social"
import CrossplayPage from "./pages/Crossplay"

import "./App.css"



function App() {
  return (
    <Router>
      <div className="App">
        <div className="settings-page">
          <Navigation/>
          <Switch>
            <Route path="/video">
              <VideoPage/>
            </Route>
            <Route path="/sound">
              <SoundPage/>
            </Route>
            <Route path="/controls">
              <ControlsPage/>
            </Route>
            <Route path="/gameplay">
              <GameplayPage/>
            </Route>
            <Route path="/social">
              <SocialPage/>
            </Route>
            <Route path="/crossplay">
              <CrossplayPage/>
            </Route>
          </Switch>
          <div className="controls">
            <div className="controls__button">
              <button>backspace</button>
              <p>restore defaults</p>
            </div>
            <div className="controls__button">
              <button>escape</button>
              <p>back</p>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

/*


          <div className="option-list">

          </div>




          */

export default App;
