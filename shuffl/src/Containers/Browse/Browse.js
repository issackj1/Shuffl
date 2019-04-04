import React, { Component } from 'react';
import logo from '../../shuffl_logo_white.png';
import khalid from '../../images/khalid.jpeg';
import TopBar from '../../components/TopBar';

import {FormText} from "react-bootstrap";
import RoomContainer from '../../components/RoomContainer';
import GenreList from '../../components/GenreList';
// import Button from 'react-bootstrap/Button';

class Browse extends Component {

    state = {
        genre:"",
        isChosen:true
    }
   
   changeGenre = (genre) => {
        console.log('this is clicking');
        console.log(genre);
        this.setState({genre:genre, isChosen:!this.state.isChosen});
   };

   resetState = () => { 
            this.setState({genre:"", isChosen:true});
   }
   
   render() {
        return(
            <div className='parent'>
                <TopBar />
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

        )
    }
}

export default Browse