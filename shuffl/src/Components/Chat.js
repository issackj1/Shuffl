import React, { Component } from 'react'
import Player from './Player';

export class Chat extends Component {
  render() {
    return (
      <div className="chatMain">
        <div className="box"><div className="chat" id="messages"></div><div className="userlist" id="Users"></div></div>
      <div className="form"><form action=""><input id="m" autocomplete="off" /><button>Send</button></form></div>
      </div>
    )
  }
}

export default Chat
