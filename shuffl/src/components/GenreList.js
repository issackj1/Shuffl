import React, { Component } from 'react'

export class GenreList extends Component {

  render() {
    return (
      <div>
        <div onClick = {() => {this.props.changeGenre("K-Pop")}}>K-Pop</div>
        <div onClick = {() => {this.props.changeGenre("R&B")}}>R&B</div>
      </div>
    )
  }
}



export default GenreList
