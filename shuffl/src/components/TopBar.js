
import React, { Component } from 'react';
import logo from '../shuffl_logo_white.png';
import Form from 'react-bootstrap/Form';

// import Button from 'react-bootstrap/Button';

class TopBar extends Component {
    



    render() {
        return (
                <div className='TopBar'>
                    <div className='TopHalf1'>
                        <img src={logo} className="TopBarLogo" alt="TopBarLogo" />
                    </div>
                    <div className='TopHalf2'>
                        <div className='linkContainer'>
                            <div  className='link Rooms'>Rooms</div>
                        </div>
                        <div className='linkContainer'>
                            <div className='link Browse'>Browse</div>
                        </div>
                        <div className='linkContainer'>
                            <div className='link Home'>Home</div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default TopBar;