import React from 'react';
import PropTypes from 'prop-types';
import Room from './Room';

const RoomList = (props) => {
	const rooms = props.rooms.map((room) => (
		<Room key={room._id} room={room} RoomId={props.RoomId} setRoomId={props.setRoomId} socket={props.socket}/>
	));
	return <div className="RoomList">{rooms}</div>;
};

RoomList.defaultProps = {
	rooms: []
};

RoomList.propTypes = {
	rooms: PropTypes.array
};

export default RoomList;
