import React, { Component } from 'react'

export class GenreList extends Component {

  render() {
    return (
      <div className="GenreList">
        <div className="Genre" onClick = {() => {this.props.changeGenre("Pop")}}><img src="https://i.imgur.com/rBPY4gI.png"></img></div>
        <div className="Genre" onClick = {() => {this.props.changeGenre("Hip-Hop")}}><img src="https://i.imgur.com/Bx9oQWz.png"></img></div>
        <div className="Genre" onClick = {() => {this.props.changeGenre("Rock")}}><img src="https://i.imgur.com/9iz7m8E.png"></img></div>
        <div className="Genre" onClick = {() => {this.props.changeGenre("R&B")}}><img src="https://i.imgur.com/1JW1UrS.png"></img></div>
        <div className="Genre" onClick = {() => {this.props.changeGenre("Indie")}}><img src="https://i.imgur.com/l62at9v.png"></img></div>
        <div className="Genre" onClick = {() => {this.props.changeGenre("K-Pop")}}><img src="https://i.imgur.com/P3CDWeP.png"></img></div>
        <div className="Genre" onClick = {() => {this.props.changeGenre("Jazz")}}><img src="https://i.imgur.com/Jor8Bhq.png"></img></div>
        <div className="Genre" onClick = {() => {this.props.changeGenre("Classical")}}><img src="https://i.imgur.com/IIB1D2n.png"></img></div>
        <div className="Genre" onClick = {() => {this.props.changeGenre("Metal")}}><img src="https://i.imgur.com/LYdUaWs.png"></img></div>
        <div className="Genre" onClick = {() => {this.props.changeGenre("Punk")}}><img src="https://i.imgur.com/fdW1TxK.png"></img></div>
        <div className="Genre" onClick = {() => {this.props.changeGenre("Reggae")}}><img src="https://i.imgur.com/kduXMWY.png"></img></div>
        <div className="Genre" onClick = {() => {this.props.changeGenre("Electronic")}}><img src="https://i.imgur.com/cS8e3B1.png"></img></div>
      </div>
    )
  }
}


export default GenreList
