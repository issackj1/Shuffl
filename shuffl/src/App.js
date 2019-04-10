import React, { Component } from 'react';
import { BrowserRouter, Route, Router, Switch, Link, withRouter } from 'react-router-dom';
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
import axios from 'axios';

import io from 'socket.io-client';

class App extends Component {
	state = {
		socket:null,
		Playing: false,
		SignedIn: false,
		UserId: '',
		RoomId: '',
		host: false
	};
	//state consists of log in status
	//this is where we will do the authentication on clientside
	initSocket= ()=>{
		const socket = io("http://localhost:4001")

		socket.on('connect', ()=>{
			console.log('connected');
		})

		this.setState({socket})
	}

	componentWillMount(){
		this.initSocket();
	}
	authenticate = () => {
		this.setState({ SignedIn: true });
		// this.setUserId('5cac258fe700081ca7bcede4');
		history.push('/home/');
		// console.log(this.state.UserId);
	};

	setUserId = (userid) => {
    //set uid from login
		this.setState({ UserId: userid });
	};

	setRoomId = (roomid, roomhost) => {
		this.setState({ RoomId: roomid, Playing: true });
		if (roomhost == this.state.UserId) {
			this.setState({ host: true });
		} else {
			this.setState({ host: false });
		}
  };
  
  joinRoom = () =>{
		//socket.emit('joined', roomid, uid)
		//add room to users roomlist using roomid and uid
  }

	render() {
		return (
			<React.Fragment>
				{this.state.SignedIn ? <TopBar /> : <TopBarSignIn />}
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
							render={(props) => <SignUp {...props} authenticate={this.authenticate} socket={this.state.socket}/>}
						/>
						<Route component={Error} />
					</Switch>
        )}
        {/* change to player */}
				{this.state.Playing ? <ChatPlayerContainer play={this.play} socket={this.state.socket} /> : null}
			</React.Fragment>
		);
	}
}

export default App;
