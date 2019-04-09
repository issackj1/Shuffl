import React, { Component } from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list'
import VideoDetail from './video_detail';
import '../../css/TempYouTube.css';
import YouTube from 'react-youtube';

const API_KEY = 'AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s';

class YouTubeMain extends Component {

    constructor(props){
        super(props);
        let player;
        player = null;
        this.state = {
            videos: [],
            selectedVideo: null,
            play: false
        };

        // this.handlePlay = this.handlePlay.bind(this);
        this.videoSearch('Drake');
    }

    videoSearch(searchTerm) {
        YTSearch({key: API_KEY, term: searchTerm}, (data) => {
            console.log(data);
            this.setState({
                selectedVideo: data[0]
            });
        });

    }

    playbutton=()=>{
        this.player.pauseVideo();
    }

    // console.log(selectedVideo);
    handleReady(e){
        this.player = e.target;
    }

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };
        return (

            <div className="parentYT">
                <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/>
                {/*<VideoDetail video={this.state.selectedVideo}/>*/}
                {this.state.selectedVideo?
                    <YouTube
                        videoId={this.state.selectedVideo.id.videoId}
                        opts={opts}
                        onReady={this.handleReady}
                    />:
                    null
                }

                <button onClick={this.playbutton} id="newBut">Click Me</button>
            </div>
        );


        // _onReady(event) {
        //     // access to player in all event handlers via event.target
        //     event.target.pauseVideo();
        // }
    }
}

export default YouTubeMain;
