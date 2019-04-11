import React, { Component } from 'react';
import Player from "../../Components/Player";
// import Chat from "../Components/Chat";
import YoutubeMain from '../MusicPlayer/YouTubeMain'

export class ChatPlayerContainer extends Component {

  state={
    chatQueueSwitch:false
  }

  switch=()=>{
    this.setState({chatQueueSwitch:!this.state.chatQueueSwitch})
  }
  render() {

    return (
      <React.Fragment>
           <YoutubeMain/>   {/* {
          this.state.chatQueueSwitch?
          <Chat />
          :null //this is where queue will go
        } */}
      </React.Fragment>
    )
  }
}

export default ChatPlayerContainer
