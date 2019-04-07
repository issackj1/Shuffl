
import React, { Component } from 'react';
import logo from '../shuffl_logo_white.png';
import Form from 'react-bootstrap/Form';
import { withRouter} from "react-router-dom";
// import Button from 'react-bootstrap/Button';

class TopBar extends Component {
    


  
    render() {
        const {matchMedia,location, history} = this.props;
        return (
                
                <div className='TopBar'>
                    <div className='TopHalf1'>
                        <img  src={logo} className="TopBarLogo" alt="TopBarLogo" onClick={()=>{history.push('/signup/')}}/>
                    </div>
                    <div className='TopHalf2'>
                    </div>
                </div>
        )
    }
}

export default withRouter(TopBar);