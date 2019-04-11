import React, { Component } from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import '../../css/TempYouTube.css';
import YouTube from 'react-youtube';
import axios from 'axios';
import Player from '../../Components/Player'

const API_KEY = 'AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s';

class YouTubeMain extends Component {
	constructor() {
		super();

		this.state = {
			player: null,
			queue: [],
			videoId: 'S1gp0m4B5p8'
		};

		// this.handlePlay = this.handlePlay.bind(this);
	}

	//TODO add function to send queued video to mongo
	componentDidMount() {
		// console.log(this.props.RoomId);
		// axios
		// 	.get('http://localhost:4000/chatrooms/' + this.props.RoomId)
		// 	.then((response) => {
		// 		this.setState({ queue: response.data.Room_queue.sort().reverse() });
		// 		console.log(this.state.queue);
		// 	})
		// 	.catch(function(error) {
		// 		console.log(error);
		// 	});
	}

	videoSearch(searchTerm) {
		YTSearch({ key: API_KEY, term: searchTerm }, (data) => {
			//take this and add it to room_queue in Mongo using this.props.RoomId
			this.setState({videoId:data[0].id.videoId})
			
            
			// axios
			// 	.post('http://localhost:4000/chatrooms/update/:' + this.props.RoomId)
			// 	.then((response) => {})
			// 	.catch(function(error) {});
			// this.setState({ selectedVideo: data[0] });
			// this.setState({ queue: this.state.queue.concat([ this.state.selectedVideo ]) });
		});
	}



	// console.log(selectedVideo);
	handleReady = (e) => {
		this.setState({ player: e.target });
	};

	next = () => {
		
		if (this.state.queue.length > 1) {
			this.state.player.loadVideoById(this.state.queue[0][1], 0, 'large');
			console.log(this.state.queue[0][1])
			this.setState({ queue: this.state.queue.splice(0, 1) });
			console.log(this.state.queue);
		}else if (this.state.queue.length == 1) {
			this.state.player.loadVideoById(this.state.queue[0][1], 0, 'large');
			console.log(this.state.queue[0][1])
			this.setState({ queue: [] });
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
				<YouTube videoId={this.state.videoId}opts={opts} onReady={this.handleReady} />
				<Player player={this.state.player} />
				{ 	
					/* <button onClick={this.next} id="newBut">
					Next
				</button> */}
			</div>
		);
	}
}

export default YouTubeMain;
