import React, { Component } from 'react'
import Users from './Users' 
import Messages from './Messages'
import socketIOClient from 'socket.io-client';

export class Chat extends Component {

  constructor(props){
    super(props);
    this.socket = null;
    this.state = {
        username : '',
        uid : '',
        users : [],
        message : ''
    }
  }

  sendMessage(message, e){
    console.log(message);
    this.setState({
          messages : this.state.messages.concat([{
          username : localStorage.getItem('username'),
          uid : localStorage.getItem('uid'),
          message : message,
       }])
    });
    this.socket.emit('message', {
        username : localStorage.getItem('username'),
        uid : localStorage.getItem('uid'),
        message : message,
    });
    this.scrollToBottom();
  }

  scrollToBottom(){
    let messages = document.getElementsByClassName('messages')[0];
    messages.scrollTop = messages.scrollHeight - messages.clientHeight;
  }

  componentDidMount(){
    this.initChat();
  }

  initChat(){
    
    this.socket = socketIOClient('ws://localhost:8989', {
        query : 'username='+this.state.username+'&uid='+this.state.uid
    });

    this.socket.on('updateUsersList', function (users) {
        console.log(users);
        this.setState({
            users : users
        });
    }.bind(this));

    this.socket.on('message', function (message) {
        this.setState({
            messages : this.state.messages.concat([message])
        });
        this.scrollToBottom();
    }.bind(this));
  }

  render() {
    return (
      <div className="chat">
        <React.Fragment>
            <Users users={this.state.users}/>
            <Messages
                sendMessage={this.sendMessage.bind(this)}
                messages={this.state.messages}
            />
        </React.Fragment>
      </div>
    )
  }
}

export default Chat
