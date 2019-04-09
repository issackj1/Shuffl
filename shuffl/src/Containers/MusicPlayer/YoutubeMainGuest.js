import React, { Component } from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';

import '../../css/TempYouTube.css';
import YouTube from 'react-youtube';
import axios from "axios";


const API_KEY = 'AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s';
export class YoutubeMainGuest extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            player:null,
            queue: [],
            selectedVideo: null
        };

    }
    
    play=()=>{
        console.log(this.state.queue)
        this.state.player.loadVideoById(this.state.queue[0],0,'large');
    }


    // console.log(selectedVideo);
    handleReady=(e)=>{
        this.setState({player: e.target})
        //this is where we'll fetch room queue data 
        axios.get('http://localhost:4000/chatrooms/'+ '5ca52a311c9d440000f82bd9')
        .then(response => {
            this.setState({queue:response.data.Room_queue})
            this.play()
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render() {
        const opts = {
            height: '300',
            width: '300',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };

        return ( 
            <div className="parentYT">
                <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/>
                    <YouTube
                        opts={opts}
                        onReady={this.handleReady}
                    />
            </div>
        );
    }
}

export default YoutubeMainGuest
