import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import ExpressComponent from './expressComponent';
import Saved from './scenes/Saved';
import Search from './scenes/Search';

function App() {
  return (
    <Router>
    <div>
      <Switch>
      <Route exact path="/">
       <Search/>
        </Route>
        <Route path="/saved">
        <Saved />
        </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
