import React, { Component } from 'react';
import RoomList from './RoomList';
import RoomService from '../services/RoomService';

export default class RoomContainer extends Component {

    constructor() {
        super();

        this.state = {
            rooms: []
        };
    }

    componentDidMount() {
        this.setState(() => ({ rooms: RoomService.getRooms() }));
    }

    render() {
        return (
            <div className="RoomContainer">
              <RoomList rooms={this.state.rooms} genre = {this.props.genre} />
            </div>
        );
    }
}
