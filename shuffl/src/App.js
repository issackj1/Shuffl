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

class App extends Component {
	state = {
		Playing: false,
		SignedIn: false,
		UserId: '',
		RoomId: '',
		host: false
	};
	//state consists of log in status
	//this is where we will do the authentication on clientside
	authenticate = () => {
		this.setState({ SignedIn: true });
		this.setUserId('5cac258fe700081ca7bcede4');
		history.push('/home/');
		console.log(this.state.UserId);
	};

	setUserId = (userid) => {
		this.setState({ UserId: userid });
	};
	play = () => {
		this.setState({ Playing: true });
	};

	setRoomId = (roomid) => {
		this.setState({ RoomId: roomid });
	};

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
									play={this.play}
									UserId={this.UserId}
									RoomId={this.RoomId}
									setRoomId={this.setRoomId}
								/>
							)}
						/>
						<Route
							path={'/browse/'}
							render={(props) => (
								<Browse
									{...props}
									play={this.play}
									UserId={this.UserId}
									RoomId={this.RoomId}
									setRoomId={this.setRoomId}
								/>
							)}
						/>
						<Route
							path={'/rooms/'}
							render={(props) => (
								<Rooms
									{...props}
									play={this.play}
									UserId={this.state.UserId}
									RoomId={this.state.RoomId}
									setRoomId={this.setRoomId}
								/>
							)}
						/>
						<Route
							path={'/youtube/'}
							render={(props) => (
								<YouTubePage
									{...props}
									play={this.play}
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
							render={(props) => <SignUp {...props} authenticate={this.authenticate} />}
						/>
						<Route component={Error} />
					</Switch>
				)}
				{this.state.Playing ? <ChatPlayerContainer play={this.play} /> : null}
			</React.Fragment>
		);
	}
}

export default App;
