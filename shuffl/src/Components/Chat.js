import React, { Component } from 'react'
import Messages from './Messages'

export class Chat extends Component {


  sendMessage(message, e){
    let msg = this.props.Username + ': ' + message;
    this.props.socket.emit('sendmessage', msg, this.props.RoomId);
    this.scrollToBottom();
  }

  scrollToBottom(){
    let messages = document.getElementsByClassName('messages')[0];
    messages.scrollTop = messages.scrollHeight - messages.clientHeight;
  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="chat">
        <React.Fragment>
            <Messages
                sendMessage={this.sendMessage.bind(this)}
                messages={this.props.messages}
            />
        </React.Fragment>
      </div>
    )
  }
}

export default Chat
