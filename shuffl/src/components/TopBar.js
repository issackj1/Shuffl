
import React, { Component } from 'react';
import logo from '../shuffl_logo_white.png';
import Form from 'react-bootstrap/Form';

// import Button from 'react-bootstrap/Button';

class TopBar extends Component {

    render() {
        return (
                
                <div className='header'>
                    <div className='header1half'>
                        <div className="logoContainer">
                            <img src={logo} className="App-logo" alt="logo" />
                        </div>
                    </div>
                    <div className='header2half'>
                        <div className='buttonContainer'>
                            <button id='roomsBtn' className='plainBtn'>Rooms</button>
                        </div>
                        <div className='buttonContainer'>
                            <button id='browseBtn' className='plainBtn'>Browse</button>
                        </div>
                        <div className='buttonContainer'>
                            <button id='homeBtn' className='plainBtn'>Home</button>
                        </div>
                    </div>
                </div>
        )
    }
}

export default TopBar;