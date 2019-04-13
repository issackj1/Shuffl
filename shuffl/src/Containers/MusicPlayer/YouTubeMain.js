import React, { Component } from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import '../../css/TempYouTube.css';
import YouTube from 'react-youtube';
import axios from 'axios';
import Player from '../../Components/Player';
import Chat from '../../Components/Chat'


const API_KEY = 'AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s';

class YouTubeMain extends Component {
	constructor() {
		super();

		this.state = {
			search: false,
			player: null,
			videos: [],
			videoId: 'S1gp0m4B5p8',
			queue: [],
			chat: false,
			messages:[]
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

	chat = ()=>{
		this.setState({chat: !this.state.chat})
	}

	searchVideo = () => {
		this.setState({ search: !this.state.search });
	};

	skipVideo = () => {
		var time = this.state.player.getCurrentTime();
		this.state.player.seekTo(time + 10, true);
	};

	scrollToBottom= ()=>{
		let messages = document.getElementsByClassName('messages')[0];
		messages.scrollTop = messages.scrollHeight - messages.clientHeight;
	}

	initChat=()=>{
		this.props.socket.on('receivemessage', function (msg) {
			this.setState({
				messages : this.state.messages.concat([msg])
			});
			this.scrollToBottom();
		}.bind(this))		
	}

	//TODO add function to send queued video to mongo
	componentDidMount() {
		this.initChat();
	}

	componentDidUpdate(prevProps, prevState) {
		// queue is object
		// this.state.queue
		// if comparing two objects, you are comparing reference
		// if it's video id then json.stringify each prevState.queue and this.state.queue and compare

		if (JSON.stringify(prevState.queue) !== JSON.stringify(this.state.queue)) {
			this.props.socket.emit('sendqueue', this.state.queue, this.props.RoomId)
		}
	}

	videoSearch(searchTerm) {
		YTSearch({ key: API_KEY, term: searchTerm+"Official Audio"}, (data) => {
			this.setState({ videos: data });
			this.setState({ videoId: data[0].id.videoId });
		});
	}

	// console.log(selectedVideo);
	handleReady = (e) => {
		this.setState({ player: e.target });

		this.props.socket.on('timereq', ()=>{
			this.props.socket.emit('sendtime', this.props.RoomId, this.state.player.getCurrentTime(), this.state.player.getPlayerState())
		})
	};

	// getCurrentTime =()=>{
	// 	if(this.state.player){
	// 		return this.state.player.getCurrentTime()
	// 	}else{
	// 		return 0
	// 	}	
	// }

	render() {
		let controlsShift = this.state.search ? 'playerRowContainerExpanded':'playerRowContainer'
		const opts = {
			height: '0',
			width: '0',
			playerVars: {
				// https://developers.google.com/youtube/player_parameters
				autoplay: 1
			}
		};

		return (
			<div className="controlsShift">
				<div className="youtubeIframe">
					<YouTube videoId={this.state.videoId} opts={opts} onReady={this.handleReady}/>
				</div>
				<Player  pauseVideo={this.pauseVideo} skipVideo={this.skipVideo} searchVideo={this.searchVideo} chat = {this.chat}/>
				{this.state.search ? (
					<div className="footerGrey">
						<SearchBar onSearchTermChange={(searchTerm) => this.videoSearch(searchTerm)} />
						<div className="videoListContainer">
						<VideoList videos={this.state.videos} addToQueue={this.addToQueue} />
						</div>
					</div>
				) : null}
				{
					this.state.chat?(
						<Chat socket={this.props.socket}sendMessage={this.sendMessage}
						messages={this.state.messages} users = {this.state.users} Username={this.props.Username} RoomId={this.props.RoomId}/>
					):null
				}
			</div>
		);
	}
}

export default YouTubeMain;
