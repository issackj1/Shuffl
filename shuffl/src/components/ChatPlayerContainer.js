import React, { Component } from 'react';
import Player from "../components/Player";
import Chat from "../components/Chat";

export class ChatPlayerContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
        maximized: false
    };
    
    this.operation = this.operation.bind(this)
  }

  operation = () =>{
      const {maximized} = this.state;
      this.setState({maximized: !maximized})
  }

  render() {
    return (
      <div>
        <Player />
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
