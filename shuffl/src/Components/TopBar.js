
import React, { Component } from 'react';
import logo from '../shuffl_logo_white.png';
import { withRouter} from "react-router-dom";
// import Button from 'react-bootstrap/Button';

class TopBar extends Component {

    componentDidMount(){
        const {history} = this.props;
        history.push('/home/')
    }

    render() {
        const {matchMedia,location, history, logout} = this.props;
        return (
                
                <div className='TopBar'>
                    <div className='TopHalf1'>
                        <img  src={logo} className="TopBarLogo" alt="TopBarLogo" onClick={()=>{history.push('/home/')}}/>
                    </div>
                    <div className='TopHalf2'>
                        <div className='linkContainer'>
                            <div onClick={()=>{logout()}} className='link Logout'>Logout</div>
                        </div>
                        <div className='linkContainer'>
                            <div onClick={()=>{history.push('/rooms/')}} className='link Rooms'>Rooms</div>
                        </div>
                        <div className='linkContainer'>
                            <div onClick={()=>{history.push('/browse/')}} className='link Browse'>Browse</div>
                        </div>
                        <div className='linkContainer'>
                            <div onClick={()=>{history.push('/home/')}} className='link Home'>Home</div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default withRouter(TopBar);