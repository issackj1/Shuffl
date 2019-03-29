import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import SignUp from "./components/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/Homepage";
/*import Homepage from "./components/Homepage";*/
import Room from "./components/homepageComponents/Room.js";
import Browse from "./components/Browse";

class App extends Component {
  render() {
    return (
        <Router>
            <Route path={"/"} exact component={Browse} />
        </Router>
    );
  }
}

export default App;
