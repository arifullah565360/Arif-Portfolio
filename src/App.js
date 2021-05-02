// import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>

      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">

          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
