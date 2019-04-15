import React, { Component } from 'react';
import RoomList from './RoomList';

export default class RoomContainer extends Component {
	constructor() {
		super();

		this.state = {
			rooms: []
		};
	}

	componentDidMount() {
		this.props.socket.emit('getjoinedrooms', this.props.UserId);
		this.props.socket.on(
			'rejoinedrooms',
			function(rerooms) {
				this.setState({ rooms: rerooms });
			}.bind(this)
		);
	}

	render() {
		return (
			<div className="RoomContainer">
				<RoomList
					rooms={this.state.rooms}
					genre={this.props.genre}
					RoomId={this.props.RoomId}
					setRoomId={this.props.setRoomId}
				/>
			</div>
		);
	}
}
