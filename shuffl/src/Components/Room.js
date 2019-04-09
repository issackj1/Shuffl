import React, { Component } from 'react'
import PropTypes from 'prop-types';
import khalid from '../images/khalid.jpeg'

  const Room = (props) =>(
      <div className="Room">
        <div className="RoomImage"><img src = {khalid}></img></div>
        <div className="Room footer" onClick={props.play}>{props.room.RoomName}{props.room.RoomHost}{props.room._id}</div>
      </div>
    );
  
  Room.defaultProps = {
    room: {}
  };

  Room.propTypes = {
    room: PropTypes.object
  };
  
export default Room;
