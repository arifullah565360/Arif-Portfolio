import logo from './logo.svg';
import './App.css';
import DisplayHome from './component/DisplayHome/DisplayHome';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';

function App() {
  return (
    <div>
       
        <Router>
          <Switch>
           <Route exact path="/">
              <DisplayHome></DisplayHome>
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
