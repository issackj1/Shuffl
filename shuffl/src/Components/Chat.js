import React, { Component } from 'react'
import Users from './Users' 
import Messages from './Messages'
import socketIOClient from 'socket.io-client';

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
            <Users users={this.props.users}/>
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
