import React, { Component } from 'react';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import Queue from './video_list_guest';
import '../../css/TempYouTube.css';
import YouTube from 'react-youtube';
import Player from '../../Components/Player';
import Chat from '../../Components/Chat';

const API_KEY = 'AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s';

class YouTubeMain extends Component {
	constructor() {
		super();

		this.state = {
			search: false,
			player: null,
			videos: [],
			videoId: '',
			queue: [],
			chat: false,
			messages: [],
			videoTitle: '',
			play: false
		};
	}

	pauseVideo = () => {
		if (this.state.player.getPlayerState() === 1) {
			this.state.player.pauseVideo();
			this.props.socket.emit('sendpause', this.props.RoomId);
		} else {
			this.state.player.playVideo();
			this.props.socket.emit('sendplay', this.props.RoomId);
		}
	};

	addToQueue = (video) => {
		if (this.state.queue.length >= 0 && this.state.player.getPlayerState() !== 5) {
			this.setState((prevState) => ({
				queue: [ ...prevState.queue, video ]
			}));
		} else {
			this.state.player.loadVideoById(video.id.videoId, 0, 'large');
			this.setState({ videoId: video.id.videoId });
			this.setState({ videoTitle: video.snippet.title });
			this.props.socket.emit('updateVideo', this.props.RoomId, video.id.videoId, video.snippet.title);
		}
	};

	chat = () => {
		this.setState({ chat: !this.state.chat });
	};

	searchVideo = () => {
		this.setState({ search: !this.state.search });
	};

	skipVideo = () => {
		if (this.state.queue.length >= 1) {
			this.state.player.loadVideoById(this.state.queue[0].id.videoId, 0, 'large');
			this.setState({ videoTitle: this.state.queue[0].snippet.title });
			this.setState({ videoId: this.state.queue[0].id.videoId, queue: this.state.queue.slice(1) });
			this.props.socket.emit('sendskip', this.props.RoomId);
		} else {
			this.state.player.stopVideo();
			this.props.socket.emit('sendstop', this.props.RoomId);
		}
	};

	nextVideo=()=>{
		if (this.state.queue.length > 0) {
			this.state.player.loadVideoById(this.state.queue[0].id.videoId, 0, 'large');
			this.setState({ videoTitle: this.state.queue[0].snippet.title });
			this.setState({ videoId: this.state.queue[0].id.videoId, queue: this.state.queue.slice(1) });
		}
	}

	playPause=()=>{
		if(this.state.player.getPlayerState() === 1) {
			this.setState({play: true});
		} else {
			this.setState({play: false});
		}
	}

	initChat = () => {
		this.props.socket.on(
			'receivemessage',
			function(msg) {
				this.setState({
					messages: this.state.messages.concat([ msg ])
				});
			}.bind(this)
		);
	};

	componentDidMount() {
		this.initChat();
	}

	componentDidUpdate(prevProps, prevState) {
		// queue is object
		// this.state.queue
		// if comparing two objects, you are comparing reference
		// if it's video id then json.stringify each prevState.queue and this.state.queue and compare

		if (prevState.queue !== this.state.queue) {
			this.props.socket.emit('updateQueue', this.props.RoomId, this.state.queue);
		}

		if (prevProps.RoomId !== this.props.RoomId) {
			this.setState({ queue: [], messages: [], videos: [], videoId: '' });
			if (this.state.player) {
				this.state.player.stopVideo();
			}
		}

		if (prevState.player !== this.state.player) {
			this.state.player.setVolume(100);
		}

		if (prevState.search !== this.state.search) {
			if (this.state.chat) {
				let chat = document.getElementsByClassName('chat')[0];
				if (this.state.search) {
					chat.style.height = '61vh';
				} else {
					chat.style.height = '83vh';
				}
			}
		}
	}

	videoSearch(searchTerm) {
		YTSearch({ key: API_KEY, term: searchTerm + 'Official Audio', maxResults: 10 }, (data) => {
			this.setState({ videos: data });
			// this.setState({ videoId: data[0].id.videoId });
		});
	}

	// console.log(selectedVideo);
	handleReady = (e) => {
		this.setState({ player: e.target });

		this.props.socket.on('timereq', (username) => {
			console.log(this.state.videoId);
			this.props.socket.emit(
				'sendtime',
				this.props.RoomId,
				username,
				this.state.player.getCurrentTime(),
				this.state.player.getPlayerState(),
				this.state.videoId,
				this.state.videoTitle
			);
		});

		this.props.socket.on('queuereq', (username) => {
			console.log();
			this.props.socket.emit('sendqueue', this.props.RoomId, username, this.state.queue);
		});
	};

	// getCurrentTime =()=>{
	// 	if(this.state.player){
	// 		return this.state.player.getCurrentTime()
	// 	}else{
	// 		return 0
	// 	}
	// }

	render() {
		//let controlsShift = this.state.search ? 'playerRowContainerExpanded':'playerRowContainer'
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
					<YouTube videoId={this.state.videoId} opts={opts} onReady={this.handleReady} onEnd={this.nextVideo} onStateChange={this.playPause}/>
				</div>
				<Player
					pauseVideo={this.pauseVideo}
					skipVideo={this.skipVideo}
					searchVideo={this.searchVideo}
					chat={this.chat}
					Roomname={this.props.Roomname}
                    video={this.state.videoTitle}
					play={this.state.play}
				/>
				{this.state.search ? (
					<div className="footerGrey">
						<SearchBar onSearchTermChange={(searchTerm) => this.videoSearch(searchTerm)} />
						<div className="videoListContainer">
							<VideoList videos={this.state.videos} addToQueue={this.addToQueue} />
						</div>
					</div>
				) : (
					<Queue videos={this.state.queue} />
				)}
				{this.state.chat ? (
					<Chat
						socket={this.props.socket}
						sendMessage={this.sendMessage}
						messages={this.state.messages}
						users={this.state.users}
						Username={this.props.Username}
						RoomId={this.props.RoomId}
					/>
				) : null}
			</div>
		);
	}
}

export default YouTubeMain;
