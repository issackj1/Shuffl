import React, { Component } from 'react'
import chatButton from '../icons/chatButton.png'
import queueButton from '../icons/queueButton.png'
import filler from '../icons/1x1.png'

export class Player extends Component {


  render() {

    return (
      <div className="playerController">
        <div className="playerBottom">
          <div className="playerBox">
            <div className="currentSong">Song Name<br></br>Time</div>
          </div>
          <div className="playerBox"><img  src={filler} className="filler"/></div>
          <div className="playerBox">
            <img  src={queueButton} className="queueButton" onClick={()=>{this.props.queue()}}/>
            <img  src={chatButton} className="chatButton" onClick={()=>{this.props.chat()}}/>
          </div>
        </div>

      </div>
    )
  }
}

export default Player
