import React, { Component } from 'react';
import { BrowserRouter, Route , Router,  Switch, Link, withRouter} from "react-router-dom";
import history from './components/History';
import './css/App.css';


import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./Containers/Homepage/Homepage";
import Browse from "./Containers/Browse/Browse";
import Rooms from "./Containers/Rooms/Rooms"
import SignUp from "./components/SignUp";

import Error from "./Containers/Error/Error"

import logo from './shuffl_logo_white.png';
import TopBar from './components/TopBar';
import TopBarSignIn from './components/TopBarSignIn';

class App extends Component {
  
  state={
    playing:false,
    SignedIn:false
  }
  //state consists of log in status
  render() {

    return (
      <React.Fragment>
        {this.state.SignedIn?
        <TopBar/>:<TopBarSignIn/>
        }
          { this.state.SignedIn?
            <Switch>
              <Route path={"/home/"} exact component={Homepage} />
              <Route path={"/browse/"} exact component={Browse} />
              <Route path={"/rooms/"} exact component={Rooms} />
              <Route component={Error}/>
            </Switch>
            :<Switch>
              <Route path={"/signup/"} exact component={SignUp} />
              <Route component={Error}/>
            </Switch>
          }
      </React.Fragment>
    );
  }
}

export default App;
