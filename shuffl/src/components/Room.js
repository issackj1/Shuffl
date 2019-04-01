import React, { Component } from 'react'

export class Room extends Component {

  constructor(props){
    super(props);

    this.state = {
        RoomID: 0,
        RoomName: "default room",
        RoomHost: "default user"
    };
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Room
