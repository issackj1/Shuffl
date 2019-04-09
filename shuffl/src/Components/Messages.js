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
        return (
            <div className="messages col-xs-12 col-sm-12 col-md-8 col-lg-10" >
                {this.state.messages.length ? (
                    this.state.messages.map((message, i) => {
                        return (
                            <Message key={i} message={message}/>
                        )
                })):null}
                <ChatBox sendMessage={this.props.sendMessage}/>
            </div>
        )
    }
}

export default Messages;