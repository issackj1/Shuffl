import React, { Component } from 'react'
import playButton from '../icons/playbutton.png'
import searchButton from '../icons/searchButton.png'
import skipButton from '../icons/skipButton.png'

export class Player extends Component {


  render() {

    return (
      <div className="playerController">
        <div className="slideContainer">
          <input type="range" min="1" max="100" value="50" className="slider" id="myRange"></input>
        </div>
        <div className="playerBottom">
          <div className="playerBox">
            <div className="currentSong">Song Name<br></br>Time</div>
          </div>
          <div className="playerBox">
            <img  src={searchButton} className="searchButton" onClick={()=>{this.props.searchVideo()}}/>
            <img  src={playButton} className="playButton" onClick={()=>{this.props.pauseVideo()}}/>
            <img  src={skipButton} className="skipButton" onClick={()=>{this.props.skipVideo()}}/>
            <button className='chatButton' onClick={()=>this.props.chat()}>chat</button>
          </div>
          <div className="playerBox">Volume</div>
        </div>

      </div>
    )
  }
}

export default Player
