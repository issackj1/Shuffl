const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Add current time

let ChatRoom = new Schema({
    RoomName:
        {
            type: String
        },
    RoomHostId:
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
        },
    ChatLog:
    {
        type: []
    }
});

module.exports = mongoose.model('ChatRoom', ChatRoom);