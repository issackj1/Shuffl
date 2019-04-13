import React from 'react';
import ChatBox from "./ChatBox";
import Message from "./Message";

class Messages extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            messages : props.messages
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        return  {
            messages : nextProps.messages,
        }
    }
    
    render() {
        const messagesList = this.state.messages.map((message, i) => (<Message key={i} message={message}/>));
        
        return(
            <div className="chatDiv">
                <div className="messageBox" >
                    {messagesList}    
                </div>
            <ChatBox sendMessage={this.props.sendMessage}/>
            </div>
        )
    }
}

export default Messages;