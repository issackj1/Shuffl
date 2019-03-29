const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ChatRoom = new Schema({
    chatroom_name:
        {
            type: String
        },
    chatroom_owner:
        {
            type: String
        },
    chatroom_pic:
        {
            type: String
        },
    chatroom_log:
        {
            type: String
        },
    chatroom_members:
        {
            type: []
        },
    chatroom_queue:
        {
            type: []
        }
});

module.exports = mongoose.model('ChatRoom', ChatRoom);