import React, { Component } from 'react';
import Player from "../../Components/Player";
// import Chat from "../Components/Chat";

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
        <Player switch={this.chatQueueSwitch}/>
        {/* {
          this.state.chatQueueSwitch?
          <Chat />
          :null //this is where queue will go
        } */}
      </React.Fragment>
    )
  }
}

export default ChatPlayerContainer
