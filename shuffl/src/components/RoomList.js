import React from 'react';
import PropTypes from 'prop-types';
import Room from './Room';

const getRooms = (rooms) => {
    return (
        <div className="card-deck">
            {
                rooms.map(room => <Room key={room.RoomID} room={room} />)
            }
        </div>
    );
};

const RoomList = (props) => (
    <div>
        {getRooms(props.rooms)}
    </div>
);

RoomList.defaultProps = {
    rooms: []
};

RoomList.propTypes = {
    rooms: PropTypes.array
};

export default RoomList;