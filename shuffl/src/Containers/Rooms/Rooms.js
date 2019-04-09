import React, { Component } from 'react';
import CreateRoom from '../../Components/CreateRoom';
import RoomContainer from '../../Components/RoomContainer'
class Room extends Component {

    state = {
        createRoom:false
    }

    operation = () =>{
        const {createRoom} = this.state;
        this.setState({createRoom: !createRoom})
    }

    render() {
        return (
        <div className='parent'>
            <div className='bottom'>
                <div className ="page-title">
                    <h1>Rooms</h1>
                </div>
                <div>
                    <button onClick={this.operation}className="button primary">Create Room</button>
                </div>
                {
                    this.state.createRoom?
                    <CreateRoom play ={this.props.play}/>:<RoomContainer play = {this.props.play}/>
                }
        
            </div>
        </div>        
        )
    }
}

export default Room