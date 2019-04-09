import React, { Component } from 'react'

export class Player extends Component {


  render() {
    return (
      <div className="player">
        <div className="player top">
        <div className="fullscreen"></div>
        <div className="roomID"></div>
        <div className="upNext">
        <div></div>
        <div className="voting"></div>
        </div>
        </div>

        <div className="player bottom">
        <div className="currentSong"></div>
        <div className="progressBar"></div>
        <div className="volume"></div>
        </div>
      </div>
    )
  }
}

export default Player
