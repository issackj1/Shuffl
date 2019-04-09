import React, { Component } from 'react'

export class GenreList extends Component {

  render() {
    return (
      <div className="GenreList">
        <div className="Genre" onClick = {() => {this.props.changeGenre("Pop")}}>Pop</div>
        <div className="Genre" onClick = {() => {this.props.changeGenre("Hip-Hop")}}>Hip-Hop</div>
        <div className="Genre" onClick = {() => {this.props.changeGenre("Rock")}}>Rock</div>
        <div className="Genre" onClick = {() => {this.props.changeGenre("R&B")}}>R&B</div>
        <div className="Genre" onClick = {() => {this.props.changeGenre("Indie")}}>Indie</div>
        <div className="Genre" onClick = {() => {this.props.changeGenre("K-Pop")}}>K-Pop</div>
        <div className="Genre" onClick = {() => {this.props.changeGenre("Jazz")}}>Jazz</div>
        <div className="Genre" onClick = {() => {this.props.changeGenre("Classical")}}>Classical</div>
        <div className="Genre" onClick = {() => {this.props.changeGenre("Metal")}}>Metal</div>
        <div className="Genre" onClick = {() => {this.props.changeGenre("Punk")}}>Punk</div>
        <div className="Genre" onClick = {() => {this.props.changeGenre("Reggae")}}>Reggae</div>
        <div className="Genre" onClick = {() => {this.props.changeGenre("Electronic")}}>Electronic</div>
      </div>
    )
  }
}


export default GenreList
