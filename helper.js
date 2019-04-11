//get rooms user has joined
    //first get the user object then get the roomlist prop
    //then find all rooms with this ID
    //then return these rooms
//also sort rooms in order of most joined
// Load User model
const User = require('../models/User');
User.findOne({
    email: req.name
}).then(user => {

    rooms = user.roomList;
    let roomObjects = [];

    for(let i = 0; i < user.roomList.length; i ++){
        ChatRoom.findById(rooms[i], function (err, chatroom) {
            if (!chatroom){
                res.status(404).send('Could not find chatroom');
            }else{
                roomObjects.append(chatroom);
            }
        });

    }
    //now sort
    rooms.sort(function(a, b) {
        return a.userList.length > b.userList.length;
    });

    rooms.sort();

});


//when a user clicks leave then
//get the room then all the members in this room
//then remove him from this list



//




