import React, { Component } from 'react';
import PropTypes from 'prop-types';
import khalid from '../images/khalid.jpeg';

const Room = (props) => (
	<div className="Room">
		<div className="RoomImage">
			<img src={khalid} />
		</div>
		<div
			className="RoomFooter"
			onClick={() => {
				props.setRoomId(props.room._id);
			}}
		>
			{props.room.RoomName}
			{props.room.RoomHost}
			{props.room._id}
		</div>
	</div>
);

Room.defaultProps = {
	room: {}
};

Room.propTypes = {
	room: PropTypes.object
};

export default Room;
