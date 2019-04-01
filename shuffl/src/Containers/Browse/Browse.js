import React, { Component } from 'react';
import logo from '../../shuffl_logo_white.png';
import '../../css/Browse.css';
import khalid from '../../images/khalid.jpeg';
import TopBar from '../../components/TopBar';

import {FormText} from "react-bootstrap";
import RoomContainer from '../../components/RoomContainer';
// import Button from 'react-bootstrap/Button';

class Homepage extends Component {
    render() {
        return (
            <div className='parent'>
                <TopBar />
                {/*<div className='middle'>*/}

                {/*</div>*/}
                <div className='bottom'>
                    {/*<h1 id={"page-title"}>Browse</h1>*/}
                    <div className ="page-title">
                        <h1>Browse</h1>
                    </div>

                    <div className="sup-category">
                        <div className="sub-category">
                            <a id="filterID" href="google.com">Genres</a>
                        </div>
                        <span className="sub-category">
                            <a id="filterID" href="google.com">Album</a>
                        </span>
                        <span className="sub-category">
                            <a id="filterID" href="google.com">Artist</a>
                        </span>
                    </div>

                    <RoomContainer>
                        <figure className="imageBoxed">
                            <img src={khalid} alt="khalid-logo" id="khalid-logo"/>
                            <figcaption>Pop</figcaption>
                        </figure>
                        <figure className="imageBoxed">
                            <img src={khalid} alt="khalid-logo" id="khalid-logo"/>
                            <figcaption>Hip-Hop</figcaption>
                        </figure>
                        <figure className="imageBoxed">
                            <img src={khalid} alt="khalid-logo" id="khalid-logo"/>
                            <figcaption>Rock</figcaption>
                        </figure>
                        <figure className="imageBoxed">
                            <img src={khalid} alt="khalid-logo" id="khalid-logo"/>
                            <figcaption>R&B</figcaption>
                        </figure>
                        <figure className="imageBoxed">
                            <img src={khalid} alt="khalid-logo" id="khalid-logo"/>
                            <figcaption>Indie</figcaption>
                        </figure>
                        <figure className="imageBoxed">
                            <img src={khalid} alt="khalid-logo" id="khalid-logo"/>
                            <figcaption>K-Pop</figcaption>
                        </figure>
                        <figure className="imageBoxed">
                            <img src={khalid} alt="khalid-logo" id="khalid-logo"/>
                            <figcaption>Jazz</figcaption>
                        </figure>
                        <figure className="imageBoxed">
                            <img src={khalid} alt="khalid-logo" id="khalid-logo"/>
                            <figcaption>Classical</figcaption>
                        </figure>
                        <figure className="imageBoxed">
                            <img src={khalid} alt="khalid-logo" id="khalid-logo"/>
                            <figcaption>Metal</figcaption>
                        </figure>
                        <figure className="imageBoxed">
                            <img src={khalid} alt="khalid-logo" id="khalid-logo"/>
                            <figcaption>Punk</figcaption>
                        </figure>
                        <figure className="imageBoxed">
                            <img src={khalid} alt="khalid-logo" id="khalid-logo"/>
                            <figcaption>Reggae</figcaption>
                        </figure>
                        <figure className="imageBoxed">
                            <img src={khalid} alt="khalid-logo" id="khalid-logo"/>
                            <figcaption>Electronic</figcaption>
                        </figure>
                    </RoomContainer>
                </div>
            </div>
        )
    }
}

export default Homepage