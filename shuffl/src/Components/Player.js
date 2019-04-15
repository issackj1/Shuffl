import React, { Component } from 'react'
import playButton from '../icons/playbutton.png'
import searchButton from '../icons/searchButton.png'
import skipButton from '../icons/skipButton.png'
import chatButton from '../icons/chatButton.png'
import pauseButton from '../icons/pausebutton.png'

export class Player extends Component {


  render() {

    let playPause = this.props.play ? pauseButton : playButton;
    return (
      <div className="playerController">
        <div className="playerBottom">
          <div className="playerBox">
            <div className="currentSong"><b>{this.props.Roomname}</b><br></br>{this.props.video}</div>
          </div>
          <div className="playerBox">
            <img  src={searchButton} className="searchButton" onClick={()=>{this.props.searchVideo()}}/>
            <img  src={playPause} className="playButton" onClick={()=>{this.props.pauseVideo()}}/>
            <img  src={skipButton} className="skipButton" onClick={()=>{this.props.skipVideo()}}/>
          </div>
          <div className="playerBox">
            <img  src={chatButton} className="chatButton" onClick={()=>{this.props.chat()}}/>
          </div>
        </div>

      </div>
    )
  }
}

export default Player
