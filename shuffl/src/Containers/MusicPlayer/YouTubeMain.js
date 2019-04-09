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
        
        this.state = {
            player:null,
            queue: [],
            selectedVideo: null
        };

        // this.handlePlay = this.handlePlay.bind(this);
        this.videoSearch('Drake');
    }

    videoSearch(searchTerm) {
        YTSearch({key: API_KEY, term: searchTerm}, (data) => {
            this.setState({selectedVideo: data[0]});
            this.setState({queue: this.state.queue.concat([this.state.selectedVideo])})
            console.log(this.state.queue)
        });
    }


    playbutton=()=>{
        this.state.player.pauseVideo();
    }

    // console.log(selectedVideo);
    handleReady=(e)=>{
        this.setState({player: e.target})
    }

    next = () =>{
        if(this.state.queue.length == 1){
            this.state.player.loadVideoById(this.state.queue[0].id.videoId, 0, "large")
            this.setState({queue: []})
        }else if(this.state.queue.length>0){
            this.setState({queue: this.state.queue.splice(0,1)})
            this.state.player.loadVideoById(this.state.queue[0].id.videoId, 0, "large")
        }
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
                {/*<VideoDetail video={this.state.selectedVideo}/>*/}
                {this.state.queue.length?
                    <YouTube
                        videoId={this.state.queue[0].id.videoId}
                        opts={opts}
                        onReady={this.handleReady}
                    />:
                    null
                }
                <button onClick={this.next} id="newBut">Next</button>

            </div>
        );
    }
}

export default YouTubeMain;
