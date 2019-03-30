import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import SignUp from "./Components/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import Room from "./Containers/Rooms/Rooms";
import Browse from "./Containers/Browse/Browse";
import Homepage from "./Containers/Homepage/Homepage";

class App extends Component {


  //state consists of log in status
  render() {
    return (
        
        // have path for the sign up sheet and shuffl rooms
        <Router>
            <Route path={"/"} exact component={SignUp} />
            // route path for mainAPP 
        </Router>
    );
  }
}

export default App;
