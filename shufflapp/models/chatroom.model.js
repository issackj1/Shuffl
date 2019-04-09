const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Add current time

let ChatRoom = new Schema({
    RoomName:
        {
            type: String
        },
    RoomHost:
        {
            type: String
        },
    Genre:
        {
            type: String
        },
    UserList:
        {
            type: []
        }
});

module.exports = mongoose.model('ChatRoom', ChatRoom);