import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Homepage from "./Containers/Homepage/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";

/*
import Room from "./Containers/Rooms/Rooms";
import Browse from "./Containers/Browse/Browse";
import SignUp from "./components/SignUp";
*/

class App extends Component {


  //state consists of log in status
  render() {
    return (
        
        // have path for the sign up sheet and shuffl rooms
        <Router>
            <Route path={"/"} exact component={Homepage} />
        </Router>
    );
  }
}

export default App;
