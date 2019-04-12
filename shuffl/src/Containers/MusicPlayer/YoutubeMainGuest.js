import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import '../../css/TempYouTube.css';
import YouTube from 'react-youtube';
import PlayerGuest from '../../Components/PlayerGuest';

const API_KEY = 'AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s';

class YouTubeMain extends Component {
	constructor() {
		super();

		this.state = {
			search: false,
			player: null,
			videos: [],
			videoId: 'S1gp0m4B5p8',
			queue: []
		};
    }
    
	//TODO add function to send queued video to mongo
	componentDidMount() {
        this.props.socket.on('receiveplay', function(){
            this.state.player.playVideo();
        }.bind(this))

        this.props.socket.on('receivepause', function(){
            this.state.player.pauseVideo();
        }.bind(this))

        this.props.socket.on('receivetime', function(time, state){
            this.state.player.seekTo(time + .5, true)
        }.bind(this))
    }

	componentDidUpdate(prevProps, prevState) {
		// queue is object
		// this.state.queue
		// if comparing two objects, you are comparing reference
		// if it's video id then json.stringify each prevState.queue and this.state.queue and compare

		if (JSON.stringify(prevState.queue) !== JSON.stringify(this.state.queue)) {
			this.props.socket.emit('sendqueue', this.state.queue)
        }
        if(prevState.player !== this.state.player){
            this.props.socket.emit('reqtime', this.props.RoomId)
        }
    }
    
	// console.log(selectedVideo);
	handleReady = (e) => {
		this.setState({ player: e.target });
	};

	render() {
		const opts = {
			height: '200',
			width: '200',
			playerVars: {
				// https://developers.google.com/youtube/player_parameters
				autoplay: 1
			}
		};

		return (
			<div className="parentYT">
				<YouTube videoId={this.state.videoId} opts={opts} onReady={this.handleReady} />
				<PlayerGuest/>
			</div>
		);
	}
}

export default YouTubeMain;