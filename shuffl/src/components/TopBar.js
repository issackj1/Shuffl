
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
                            <a className='link Rooms' href="/rooms">Rooms</a>
                        </div>
                        <div className='linkContainer'>
                            <a className='link Browse' href="/browse">Browse</a>
                        </div>
                        <div className='linkContainer'>
                            <a className='link Home'href="/">Home</a>
                        </div>
                    </div>
                </div>
        )
    }
}

export default TopBar;