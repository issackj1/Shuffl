import React, { Component } from 'react';
import RoomList from './BrowseRoomList';

export default class RoomContainer extends Component {

    constructor() {
        super();

        this.state = {
            rooms: []
        };
    }

    componentDidMount() {
        this.props.socket.emit('getchatrooms')
        this.props.socket.on('rechatrooms', function(rerooms){
			this.setState({rooms: rerooms})
		}.bind(this))
    }
    
    render() {
        return (
            <div className="RoomContainer">
              <RoomList rooms={this.state.rooms} genre = {this.props.genre} setRoomId ={this.props.setRoomId} socket={this.props.socket}/>
            </div>
        );
    }
}
