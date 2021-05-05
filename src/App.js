import './App.css';
import Home from './component/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Projects from './component/Projects/Projects';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Blog from './component/Blog/Blog';
import Navber from './component/Navber/Navber';


function App() {
  return (
    <div>

      <Router>
        <Navber></Navber>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/project">
            <Projects></Projects>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
