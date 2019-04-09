import React, { Component } from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import '../../css/TempYouTube.css';
import YouTube from 'react-youtube';
import axios from 'axios';

const API_KEY = 'AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s';

class YouTubeMain extends Component {
	constructor() {
		super();

		this.state = {
			player: null,
			queue: [],
			selectedVideo: null
		};

		// this.handlePlay = this.handlePlay.bind(this);
	}

	//TODO add function to send queued video to mongo
	componentDidMount() {
		console.log(this.props.RoomId);
		axios
			.get('http://localhost:4000/chatrooms/' + this.props.RoomId)
			.then((response) => {
				this.setState({ queue: response.data.Room_queue.sort().reverse() });
				console.log(this.state.queue);
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	videoSearch(searchTerm) {
		YTSearch({ key: API_KEY, term: searchTerm }, (data) => {
			//take this and add it to room_queue in Mongo using this.props.RoomId
			console.log(data[0].id.videoId);
			// axios
			// 	.post('http://localhost:4000/chatrooms/update/:' + this.props.RoomId)
			// 	.then((response) => {})
			// 	.catch(function(error) {});
			// this.setState({ selectedVideo: data[0] });
			// this.setState({ queue: this.state.queue.concat([ this.state.selectedVideo ]) });
		});
	}

	playbutton = () => {
		this.state.player.playVideo();
	};

	// console.log(selectedVideo);
	handleReady = (e) => {
		this.setState({ player: e.target });
	};

	next = () => {
		console.log(this.state.queue);
		if (this.state.queue.length === 1) {
			this.state.player.loadVideoById(this.state.queue[0], 0, 'large');
			this.setState({ queue: [] });
		} else if (this.state.queue.length > 0) {
			this.setState({ queue: this.state.queue.splice(0, 1) });
			this.state.player.loadVideoById(this.state.queue[0], 0, 'large');
		} else {
			this.state.player.stopVideo();
		}
	};

	render() {
		const opts = {
			height: '300',
			width: '300',
			playerVars: {
				// https://developers.google.com/youtube/player_parameters
				autoplay: 1
			}
		};

		return (
			<div className="parentYT">
				<SearchBar onSearchTermChange={(searchTerm) => this.videoSearch(searchTerm)} />
				<YouTube opts={opts} onReady={this.handleReady} />
				<button onClick={this.next} id="newBut">
					Next
				</button>
			</div>
		);
	}
}

export default YouTubeMain;
