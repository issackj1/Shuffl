import React, { Component } from 'react'

export class Player extends Component {


  render() {

    return (
      <div className="playerController">
        <div className="playerBottom">
          <div className="playerBox">
            <div className="currentSong">Song Name<br></br>Time</div>
          </div>
          <div className="playerBox">
            
          <button className='chatButton' onClick={()=>this.props.chat()}>chat</button>
          <button className='chatButton' onClick={()=>this.props.queue()}>queue</button>
          </div>
          <div className="playerBox">Volume</div>
        </div>

      </div>
    )
  }
}

export default Player
