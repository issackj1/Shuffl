import React, { Component } from 'react'

export class Player extends Component {


  render() {

    return (
      <div className="player">
        <div className="slideContainer">
          <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>
        </div>
        <div className="playerBottom">
          <div className="playerLeft">
            <div className="currentSong">Song Name<br></br>Artist</div>
          </div>
          <div className="playerMiddle">
            <button onClick="" className="playButton">Play</button>
          </div>
          <div className="playerRight"></div>
        </div>
        
      </div>
    )
  }
}

export default Player
