import React from 'react';

class ChatBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message : ''
        }
    }

    onChange(e){
        this.setState({
            message : e.target.value
        })
    }

    onKeyUp(e){
        if (e.key === 'Enter') {
            if(this.state.message.length){
                this.props.sendMessage(
                    this.state.message
                );
                this.setState({message : ''});
            }else{
                alert('Please enter a message');
            }
        }
    }


    render(){
        return (
            <div className="chatboxDiv">
                <div className="input-group-prepend">
                </div>
                <input
                    className="form-control"
                    placeholder="Type message"
                    value={this.state.message}
                    onChange={this.onChange.bind(this)}
                    onKeyUp={this.onKeyUp.bind(this)}
                />
            </div>
        );
    }
}

export default ChatBox;