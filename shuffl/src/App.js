import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import SignUp from "./components/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";
/*import Homepage from "./components/Homepage";*/

class App extends Component {
  render() {
    return (
      <div>
        <SignUp />
      </div>
    );
  }
}

export default App;
