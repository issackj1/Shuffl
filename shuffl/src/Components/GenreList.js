import React, { Component } from 'react'

export class GenreList extends Component {

  render() {
    return (
      <div className="GenreList">
        <div onClick = {() => {this.props.changeGenre("Pop")}}>Pop</div>
        <div onClick = {() => {this.props.changeGenre("Hip-Hop")}}>Hip-Hop</div>
        <div onClick = {() => {this.props.changeGenre("Rock")}}>Rock</div>
        <div onClick = {() => {this.props.changeGenre("R&B")}}>R&B</div>
        <div onClick = {() => {this.props.changeGenre("Indie")}}>Indie</div>
        <div onClick = {() => {this.props.changeGenre("K-Pop")}}>K-Pop</div>
        <div onClick = {() => {this.props.changeGenre("Jazz")}}>Jazz</div>
        <div onClick = {() => {this.props.changeGenre("Classical")}}>Classical</div>
        <div onClick = {() => {this.props.changeGenre("Metal")}}>Metal</div>
        <div onClick = {() => {this.props.changeGenre("Punk")}}>Punk</div>
        <div onClick = {() => {this.props.changeGenre("Reggae")}}>Reggae</div>
        <div onClick = {() => {this.props.changeGenre("Electronic")}}>Electronic</div>
      </div>
    )
  }
}


export default GenreList
