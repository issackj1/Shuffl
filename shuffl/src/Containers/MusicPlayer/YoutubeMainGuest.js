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

	pauseVideo = () => {
		if (this.state.player.getPlayerState() == 1) {
			this.state.player.pauseVideo();
			this.props.socket.emit('sendpause', this.props.RoomId)
		} else {
			this.state.player.playVideo();
			this.props.socket.emit('sendplay', this.props.RoomId)
		}
	};

	addToQueue = (video) => {
		this.setState((prevState) => ({
			queue: [ ...prevState.queue, video ]
		}));
	};

	searchVideo = () => {
		this.setState({ search: !this.search });
	};
	skipVideo = () => {
		var time = this.state.player.getCurrentTime();
		this.state.player.seekTo(time + 10, true);
	};

	//TODO add function to send queued video to mongo
	componentDidMount() {}

	componentDidUpdate(prevProps, prevState) {
		// queue is object
		// this.state.queue
		// if comparing two objects, you are comparing reference
		// if it's video id then json.stringify each prevState.queue and this.state.queue and compare

		if (JSON.stringify(prevState.queue) !== JSON.stringify(this.state.queue)) {
			this.props.socket.emit('sendqueue', this.state.queue)
		}
	}

	videoSearch(searchTerm) {
		YTSearch({ key: API_KEY, term: searchTerm }, (data) => {
			//take this and add it to room_queue in Mongo using this.props.RoomId
			this.setState({ videos: data });
			this.setState({ videoId: data[0].id.videoId });
		});
	}

	// console.log(selectedVideo);
	handleReady = (e) => {
		this.setState({ player: e.target });
	};

	render() {
		const opts = {
			height: '0',
			width: '0',
			playerVars: {
				// https://developers.google.com/youtube/player_parameters
				autoplay: 1
			}
		};

		return (
			<div className="parentYT">
				<YouTube opts={opts} onReady={this.handleReady} />
				<PlayerGuest/>
			</div>
		);
	}
}

export default YouTubeMain;