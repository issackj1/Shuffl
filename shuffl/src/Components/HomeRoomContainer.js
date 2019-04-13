import React, { Component } from 'react';
import RoomList from './HomeRoomList';
import axios from 'axios';
import { Socket } from 'dgram';

export default class RoomContainer extends Component {
	constructor() {
		super();

		this.state = {
			rooms: []
		};
	}

	componentDidMount() {
		this.props.socket.emit('getpopchatrooms')
		this.props.socket.on('repoprooms', function(rerooms){
            console.log(rerooms)
			this.setState({rooms: rerooms})
		}.bind(this))
		// axios
		// 	.get('http://localhost:4000/chatrooms')
		// 	.then((response) => {
		// 		this.setState({ rooms: response.data });
		// 		console.log(response.data);
		// 	})
		// 	.catch(function(error) {
		// 		console.log(error);
		// 	});
	}

	render() {
		return (
			<div className="RoomContainer">
				<RoomList
					rooms={this.state.rooms}
					genre={this.props.genre}
					RoomId={this.props.RoomId}
					setRoomId={this.props.setRoomId}
					socket ={this.props.socket}
				/>
			</div>
		);
	}
}
