import React from 'react';
import PropTypes from 'prop-types';

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
