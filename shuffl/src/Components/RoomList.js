import React from 'react';
import PropTypes from 'prop-types';
import Room from './Room';


const RoomList = (props) => {
    console.log(props.rooms);
    const rooms = props.rooms.map(room => <Room key={room._id} room={room} play={props.play} />)
    return (
    <div className="RoomList">
       {rooms}
    </div>)
};

RoomList.defaultProps = {
    rooms: []
};

RoomList.propTypes = {
    rooms: PropTypes.array
};

export default RoomList;