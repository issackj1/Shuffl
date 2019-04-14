import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import history from './Components/History';
import './css/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Containers/Homepage/Homepage';
import Browse from './Containers/Browse/Browse';
import Rooms from './Containers/Rooms/Rooms';
import SignUp from './Components/SignUp';
import YouTubePage from './Containers/MusicPlayer/YouTubeMain';
import YouTubePageGuest from './Containers/MusicPlayer/YoutubeMainGuest';
import ChatPlayerContainer from './Containers/Chat/ChatPlayerContainer';

// import Chat from "./Components/Chat"

import Error from './Containers/Error/Error';

import TopBar from './Components/TopBar';
import TopBarSignIn from './Components/TopBarSignIn';

import io from 'socket.io-client';
import axios from 'axios'

class App extends Component {
	state = {
		socket:null,
		Playing: false,
		SignedIn: false,
		UserId: '',
		Username:'',
		RoomId: '',
		host: false
	};
	//state consists of log in status
	//this is where we will do the authentication on clientside
	initSocket= ()=>{
		const socket = io("http://localhost:4001")
		this.setState({socket})
	}

	componentDidMount(){
		axios.get('http://localhost:4000/', {withCredentials:true})
			.then(response=>{
				
				if(response.data.res.session){

					this.authenticate(response.data.res.user, response.data.res.name)
				}
		}).catch(function (error) {
			console.log(error);
		});
		this.initSocket();
	}

	authenticate = (userid, username) => {
		this.setState({ SignedIn: true, UserId:userid, Username:username});
		// this.setUserId('5cac258fe700081ca7bcede4');
		history.push('/home/');
		// console.log(this.state.UserId);
	};

	logout=()=>{
		axios.post('http://localhost:4000/users/logout', {withCredentials:true})
		this.setState({
			Playing: false,
			SignedIn: false,
			UserId: '',
			Username:'',
			RoomId: '',
			host: false
		})
		
	}

	componentDidUpdate(prevProps,prevState){
		if(prevState.socket !== this.state.socket){
			
		}
	}
	setRoomId = (roomid, roomhost) => {
		
		if (roomhost === this.state.UserId) {
			this.setState({ host: true });
		} else {
			this.setState({ host: false });
		}
		console.log('joined this room'+roomid)
		if(this.state.RoomId === ''){
			this.state.socket.emit('joinroom', roomid, this.state.Username, this.state.UserId)
			this.setState({ RoomId: roomid, Playing: true });
		}else if(this.state.RoomId !== roomid){
			this.state.socket.emit('leaveroom', this.state.RoomId, this.state.Username)
			this.state.socket.emit('joinroom', roomid, this.state.Username, this.state.UserId)
			this.setState({ RoomId: roomid, Playing: true });
		}
  };



	render() {
		return (
			<React.Fragment>
				{this.state.SignedIn ? <TopBar logout={this.logout} /> : <TopBarSignIn />}
				{this.state.SignedIn ? (
					<Switch>
						<Route
							path={'/home/'}
							render={(props) => (
								<Homepage
									{...props}
									UserId={this.state.UserId}
									RoomId={this.state.RoomId}
									setRoomId={this.setRoomId}
									socket={this.state.socket}
								/>
							)}
						/>
						<Route
							path={'/browse/'}
							render={(props) => (
								<Browse
									{...props}
									UserId={this.state.UserId}
									RoomId={this.state.RoomId}
									setRoomId={this.setRoomId}
									socket={this.state.socket}
								/>
							)}
						/>
						<Route
							path={'/rooms/'}
							render={(props) => (
								<Rooms
									{...props}
									UserId={this.state.UserId}
									RoomId={this.state.RoomId}
									setRoomId={this.setRoomId}
									socket={this.state.socket}
									Username={this.state.Username}
								/>
							)}
						/>
						<Route
							path={'/youtube/'}
							render={(props) => (
								<YouTubePage
									{...props}
									UserId={this.state.UserId}
									RoomId={this.state.RoomId}
								/>
							)}
						/>
						<Route path={'/youtubeguest/'} exact component={YouTubePageGuest} />
						{/* <Route path={"/chat/"} render={(props) => <Chat {...props} username = {this.username}/>}/> */}
						<Route component={Error} />
					</Switch>
				) : (
					<Switch>
						<Route
							path={'/signup/'}
							render={(props) => <SignUp {...props} setUserId={this.setUserId} authenticate={this.authenticate} socket={this.state.socket}/>}
						/>
						<Route component={Error} />
					</Switch>
        )}
        {/* change to player */}
				{this.state.Playing ? <ChatPlayerContainer play={this.play} socket={this.state.socket} host={this.state.host}  RoomId={this.state.RoomId} Username={this.state.Username}/> : null}
			</React.Fragment>
		);
	}
}

export default App;
