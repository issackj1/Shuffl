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
            <button onClick={()=>{this.props.pauseVideo()}} className="playButton">Play</button>
            <button onClick={()=>{this.props.skipVideo()}} className="playButton">Skip 10</button>
            <button onClick={()=>{this.props.searchVideo()}} className="searchButton">Search</button>
          </div>
          <div className="playerBox">Volume</div>
        </div>
        
      </div>
    )
  }
}

export default Player
