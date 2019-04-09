import React, { Component } from 'react';
import Player from "../Components/Player";
import Chat from "../Components/Chat";

export class ChatPlayerContainer extends Component {

  state={
    maximized:false
  }

  maximize=()=>{
    this.setState({maximized:!this.state.maximized})
  }
  render() {

    return (
      <div>
        <Player maximize={this.maximize}/>
        {
          this.state.maximized?
          <Chat />
          :null
        }
      </div>
    )
  }
}

export default ChatPlayerContainer
