import React, { Component } from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import '../../css/TempYouTube.css';
import YouTube from 'react-youtube';
import axios from 'axios';
import Player from '../../Components/Player';
import { Socket } from 'net';

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
		} else {
			this.state.player.playVideo();
		}
	};

	addToQueue = (video) => {
		this.setState((prevState) => ({
			queue: [ ...prevState.queue, video ]
		}));
	};

	searchVideo = () => {
		this.setState({ search: !this.state.search });
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
			console.log('aa;');
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
			<div className="playerRowContainer">
				<div className="youtubeIframe">
					<YouTube videoId={this.state.videoId} opts={opts} onReady={this.handleReady} />
				</div>
				<Player pauseVideo={this.pauseVideo} skipVideo={this.skipVideo} searchVideo={this.searchVideo} />
				{this.state.search ? (
					<div className="footerGrey">
						<SearchBar onSearchTermChange={(searchTerm) => this.videoSearch(searchTerm)} />
						<div className="videoListContainer">
						<VideoList videos={this.state.videos} addToQueue={this.addToQueue} />
						</div>
					</div>
				) : null}
			</div>
		);
	}
}

export default YouTubeMain;
