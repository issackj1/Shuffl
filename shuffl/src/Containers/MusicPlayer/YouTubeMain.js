import React, { Component } from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list'
import VideoDetail from './video_detail';
import '../../css/TempYouTube.css';

const API_KEY = 'AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s';

class YouTubeMain extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('Drake');
    }

    videoSearch(searchTerm) {
        YTSearch({key: API_KEY, term: searchTerm}, (data) => {
            console.log(data);
            this.setState({
                videos: data,
                selectedVideo: data[0]
            });
        });

    }

    player;

     onYouTubePlayerAPIReady =()=> {
    // create the global player from the specific iframe (#video)
    player = new YT.Player('iFrameName', {
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady
        }
    });
}

    function onPlayerReady(event) {

    // bind events
    var playButton = document.getElementById("play-button");
    playButton.addEventListener("click", function() {
        player.playVideo();
    });
    render() {
        var player;
        return (
            <div className="parentYT">
                <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                player = document.getElementById("iFrameName")
                <button id="newBut">Click Me</button>
                <VideoList
                    onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

export default YouTubeMain;
