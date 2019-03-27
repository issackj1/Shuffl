import React, { Component } from 'react';
import logo from '../shuffl_logo_white.png';
import '../css/Homepage.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Button from 'react-bootstrap/Button';

class Homepage extends Component {
    render() {
        return (
            <div className="parent">
                <div className="sidebarCol">
                    SIDEBAR
                </div>
                <div className="contentCol">
                    <div className="bannerRow">
                        ART
                    </div>
                    <div className="roomsRow">
                        ROOMS
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage