import React, { Component } from 'react';
import Banner from './Banner';
import HomeRoomList from '../../Components/HomeRoomContainer'
// import Button from 'react-bootstrap/Button';

class Homepage extends Component {


    render() {
        
        return (
            <div className='parent'>
                <Banner />
                <div className='bottom'>
                    <div className="page-title">
						<h1>Popular Rooms</h1>
					</div>
                    <HomeRoomList socket={this.props.socket} setRoomId ={this.props.setRoomId}/>
                </div>
            </div>
        )
    }
}

export default Homepage