import React, { Component } from 'react';
import { BrowserRouter, Route , Switch, Link, withRouter} from "react-router-dom";
import './css/App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./Containers/Homepage/Homepage";
import Browse from "./Containers/Browse/Browse";
import Rooms from "./Containers/Rooms/Rooms"
import SignUp from "./components/SignUp";

import logo from './shuffl_logo_white.png';
import TopBar from './components/TopBar';

class App extends Component {
  
  state={
    playing:false,
  }
  //state consists of log in status
  render() {
    
    return (
        
        <BrowserRouter>
            <nav className='TopBar'>
                <div className='TopHalf1'>
                    <img src={logo} className="TopBarLogo" alt="TopBarLogo" />
                </div>
                <ul className='TopHalf2'>
                    <li>
                        <Link to={"/rooms/"} className='link Rooms'>Rooms</Link>
                    </li>
                    <li>
                        <Link to={"/browse/"}className='link Browse'>Browse</Link>
                    </li>
                    <li>
                        <Link to={"/"}className='link Home'>Home</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
              <Route path={"/signup/"} exact component={SignUp} />
              <Route path={"/"} exact component={Homepage} />
              <Route path={"/browse/"} exact component={Browse} />
              <Route path={"/rooms/"} exact component={Rooms} />
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
