import React, { Component } from 'react';
import YoutubeMain from '../MusicPlayer/YouTubeMain'
import YoutubeMainGuest from '../MusicPlayer/YoutubeMainGuest'

export class ChatPlayerContainer extends Component {

  state={
    chatQueueSwitch:false
  }

  render() {

    return (
      <React.Fragment>
           { this.props.host?
           <YoutubeMain Roomname={this.props.Roomname}socket={this.props.socket} RoomId={this.props.RoomId} Username={this.props.Username}/> :
           <YoutubeMainGuest socket={this.props.socket} RoomId={this.props.RoomId} Roomname={this.props.Roomname}Username={this.props.Username}/>
           }
      </React.Fragment>
    )
  }
}

export default ChatPlayerContainer
