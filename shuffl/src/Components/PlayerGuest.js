import React, { Component } from 'react'

export class Player extends Component {


  render() {

    return (
      <div className="player">
        <div className="slideContainer">
          <input type="range" min="1" max="100" value="50" className="slider" id="myRange"></input>
        </div>
        <div className="playerBottom">
          <div className="playerBox">
            <div className="currentSong">Song Name<br></br>Artist</div>
          </div>
          <div className="playerBox">
          </div>
          <div className="playerBox">Volume</div>
        </div>
        
      </div>
    )
  }
}

export default Player
