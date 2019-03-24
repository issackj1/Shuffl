import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import LogIn from "./components/LogIn";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
        <Router>
          <div className="container">
            <Route path={"/"} exact component={LogIn} />
          </div>
        </Router>
    );
  }
}

export default App;
