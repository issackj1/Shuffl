import React, { Component } from 'react';
import CreateRoom from '../../components/CreateRoom';
import RoomContainer from '../../components/RoomContainer'
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
            <div className='bottom'>
                <div className ="page-title">
                    <h1>Rooms</h1>
                </div>
                <div>
                    <button onClick={this.operation}className="button primary">Create Room</button>
                </div>
                {
                    this.state.createRoom?
                    <CreateRoom/>:<RoomContainer/>
                }
        
            </div>
                

            )
    }
}

export default Room