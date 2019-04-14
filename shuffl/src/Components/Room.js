import React, { Component } from 'react';
import PropTypes from 'prop-types';
import khalid from '../images/khalid.jpeg';

const Room = (props) => (
	<div className="Room" onClick={() => {props.setRoomId(props.room._id, props.room.RoomHostId, props.room.RoomName);}}>
			<div className="roomText">{props.room.RoomName}</div>
	</div>
);

Room.defaultProps = {
	room: {}
};

Room.propTypes = {
	room: PropTypes.object
};

export default Room;
