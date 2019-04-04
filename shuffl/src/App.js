import React, { Component } from 'react';
import { BrowserRouter, Route , Switch} from "react-router-dom";
import './css/App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./Containers/Homepage/Homepage";
import Browse from "./Containers/Browse/Browse";
import Rooms from "./Containers/Rooms/Rooms"
import SignUp from "./components/SignUp";
import TopBar from './components/TopBar';

class App extends Component {
  
  state = {
    playing:false
  }
  //state consists of log in status
  render() {
    return (
        <div><TopBar/>
        {/* // have path for the sign up sheet and shuffl rooms */}
        <BrowserRouter>
            <Switch>
              <Route path={"/signup"} exact component={SignUp} />
              <Route path={"/"} exact component={Homepage} />
              <Route path={"/browse"} exact component={Browse} />
              <Route path={"/rooms"} exact component={Rooms} />
            </Switch>
        </BrowserRouter>
        </div>
    );
  }
}

export default App;
