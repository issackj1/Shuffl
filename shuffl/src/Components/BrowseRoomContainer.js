import React, { Component } from 'react';
import RoomList from './BrowseRoomList';
import axios from "axios";

export default class RoomContainer extends Component {

    constructor() {
        super();

        this.state = {
            rooms: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/chatrooms')
            .then(response => {
                this.setState({ rooms: response.data})
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="RoomContainer">
              <RoomList rooms={this.state.rooms} genre = {this.props.genre} setRoomId ={this.props.setRoomId}/>
            </div>
        );
    }
}
