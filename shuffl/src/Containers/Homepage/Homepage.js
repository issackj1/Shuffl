import React, { Component } from 'react';
import logo from '../../shuffl_logo_white.png';
import '../../css/Homepage.css';
import TopBar from '../../components/TopBar';
// import Button from 'react-bootstrap/Button';

class Homepage extends Component {
    render() {
        return (
                
           
            <div className='parent'>
                 <TopBar />
                <div className='middle'>

                </div>
                <div className='bottom'>

                </div>
                {/*<div className="sidebarCol">*/}
                    {/*/!*SIDEBAR*!/*/}
                    {/*<div className="logobar">*/}
                        {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    {/*</div>*/}
                    {/*<div className="sidebar homebar">*/}
                        {/*Home*/}
                        {/*/!*make these buttons*!/*/}
                    {/*</div>*/}
                    {/*<div className="sidebar browsebar">*/}
                        {/*Browse*/}
                        {/*/!*make these buttons*!/*/}
                    {/*</div>*/}
                    {/*<div className="sidebar roombar">*/}
                        {/*Rooms*/}
                        {/*/!*make these buttons*!/*/}
                    {/*</div>*/}

                {/*</div>*/}
                {/*<div className="contentCol">*/}
                    {/*<div className="bannerRow">*/}
                        {/*ART*/}
                    {/*</div>*/}
                    {/*<div className="roomsRow">*/}
                        {/*ROOMS*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default Homepage