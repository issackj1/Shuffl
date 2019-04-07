import React, { Component } from 'react';
import logo from '../../shuffl_logo_white.png';
import khalid from '../../images/khalid.jpeg';

import {FormText} from "react-bootstrap";
import RoomContainer from '../../components/BrowseRoomContainer';
import GenreList from '../../components/GenreList';
import CreateRoom from '../../components/CreateRoom'
// import Button from 'react-bootstrap/Button';

class Browse extends Component {

    state = {
        genre:"",
        isChosen:true
    }
   
   changeGenre = (genre) => {
        this.setState({genre:genre, isChosen:!this.state.isChosen});
   };

   resetState = () => { 
            this.setState({genre:"", isChosen:true});
   }
   
   render() {


        return(
            
            <React.Fragment>
            <div className='parent'>
                <div className='bottom'>
                    <div className ="page-title">
                        <h1>Browse</h1>
                    </div>
                    <div className="sup-category">
                        <div className="sub-category">
                            <div id="filterID" onClick={this.resetState}>Genres</div>
                        </div>
                    </div>

                    {
                        this.state.isChosen?
                        <GenreList changeGenre={this.changeGenre}/>:<RoomContainer genre={this.state.genre}/>
                    }
                </div>
            </div>
            </React.Fragment>

        )
    }
}

export default Browse