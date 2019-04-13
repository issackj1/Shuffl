import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import '../../css/TempYouTube.css';
import YouTube from 'react-youtube';
import PlayerGuest from '../../Components/PlayerGuest';
import Chat from '../../Components/Chat';
import VideoList from '../MusicPlayer/video_list_guest'

const API_KEY = 'AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s';

class YouTubeMainGuest extends Component {
	constructor() {
		super();

		this.state = {
			queuebutton: false,
			chat: false,
			player: null,
			videoId: '',
			queueguest: [],
			messagesguest:[]
		};
	}
	
	//TODO add function to send queued video to mongo
	componentDidMount() {
		this.props.socket.emit('reqqueue', this.props.RoomId, this.props.Username)

		this.props.socket.on('receivemessage', function (msg) {
			this.setState({
				messagesguest : this.state.messagesguest.concat([msg])
			});
		}.bind(this))	
		
        this.props.socket.on('receiveplay', function(){
            this.state.player.playVideo();
        }.bind(this))

        this.props.socket.on('receivepause', function(){
            this.state.player.pauseVideo();
		}.bind(this))

		this.props.socket.on('receivestop', function(){
            this.state.player.stopVideo();
		}.bind(this))
		
		this.props.socket.on('receiveskip', function(){
				this.state.player.loadVideoById(this.state.queueguest[0].id.videoId ,0,'large')
				this.setState({queueguest:this.state.queueguest.slice(1)})
        }.bind(this))

        this.props.socket.on('receivetime', function(username, time, state, videoid){
			if(this.props.Username === username){
				console.log(videoid)
				if(state == 1){
					this.state.player.loadVideoById(videoid, time,'large')
				}else{
					this.state.player.cueVideoById(videoid, time, 'large')
				}
			}
		}.bind(this))
		
		this.props.socket.on('receivequeue', function(username, queue){
			if(this.props.Username === username){
				this.setState({queueguest:queue})
			}
		}.bind(this))
		
		this.props.socket.on('updateQueue', function(queuelist){
			this.setState({queueguest:queuelist})
		}.bind(this))

		this.props.socket.on('updateVideo', function(videoid){
			this.state.player.loadVideoById(videoid, 0,'large')
		}.bind(this))

    }

	componentDidUpdate(prevProps, prevState) {
		// queue is object
		// this.state.queue
		// if comparing two objects, you are comparing reference
		// if it's video id then json.stringify each prevState.queue and this.state.queue and compare

		if (prevState.queueguest !== this.state.queueguest) {
			console.log(this.state.queueguest)
        }
        if(prevState.player !== this.state.player){
			this.props.socket.emit('reqtime', this.props.RoomId, this.props.Username)
			this.props.socket.emit('reqqueue', this.props.RoomId, this.props.Username)
		}

		if(prevProps.RoomId != this.props.RoomId){
			this.setState({queueguest:[], messagesguest:[], videoId:''})
			this.state.player.stopVideo()
		}


    }
	
	queue = () => {
		this.setState({ queuebutton: !this.state.queuebutton });
	};

	chat = ()=>{
		this.setState({chat: !this.state.chat})
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
				<div className="youtubeIframe">
					<YouTube videoId={this.state.videoId} opts={opts} onReady={this.handleReady} />
				</div>
				<PlayerGuest queue={this.queue} chat={this.chat} />
				{this.state.queuebutton ? (
					<div className="footerGrey">
						<div className="videoListContainer">
						<VideoList videos={this.state.queueguest} />
						</div>
					</div>
				) : null}
				{
					this.state.chat?(
						<Chat socket={this.props.socket}sendMessage={this.sendMessage}
						messages={this.state.messagesguest} users = {this.state.users} Username={this.props.Username} RoomId={this.props.RoomId}/>
					):null
				}
			</div>
		);
	}
}

export default YouTubeMainGuest;