import React, { Component } from 'react';
import RoomList from './HomeRoomList';

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
			this.setState({rooms: rerooms})
		}.bind(this))

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
