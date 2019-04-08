const express = require ('express');
const cors = require('cors');
const app = express();
const router = express.Router();
app.use(cors());

let ChatRoom = require('../models/chatroom.model');

//display all the Available to join chatrooms
router.get('/', function (req, res) {
    ChatRoom.find(function (err, chatrooms) {
        if (err){
            console.log(err)
        }else{
            res.json(chatrooms)
        }
    });
});

//display a specific chatroom
router.get('/:id', function (req, res) {
    let id = req.params.id;
    ChatRoom.findById(id, function (err, chatroom) {
        if (err){
            console.log(err)
        }else{
            res.json(chatroom)
        }
    });
});

//create a chatroom and add to the database
router.post('/add', function (req, res) {
    let chatroom = new ChatRoom(req.body);
    chatroom.save()
        .then(chatroom =>{
            res.status(200).json({'chatroom': 'chatroom added successfully'});
        })
        .catch(err =>{
            res.status(400).send('adding new chatroom failed')
        });
});

//update a specific chatroom
router.post('/update/:id', function (req, res) {
    ChatRoom.findById(req.params.id, function (err, chatroom) {
        if (!chatroom){
            res.status(404).send('Could not find chatroom');
        }else{
            chatroom.chatroom_name = req.body.chatroom_name;
            let currentmembers = chatroom.chatroom_members;
            let isElem = false;
            for (let i = 0; i < currentmembers.length; i++){
                if (currentmembers[i] === req.body.chatroom_members)
                    isElem = true;
            }
            if(!isElem)
                chatroom.chatroom_members.push(req.body.chatroom_members);
            chatroom.chatroom_owner = req.body.chatroom_owner;
            chatroom.chatroom_pic = req.body.chatroom_pic;

            chatroom.save()
                .then(chatroom =>{
                    res.json('chatroom updated')
                })
                .catch(err =>{
                    res.status(400).send('updated not complete');
                });
        }
    });
});

//add a song to the queue
router.post('/addsong/:id', function (req, res) {
    ChatRoom.findById(req.params.id, function (err, chatroom) {
        if (!chatroom){
            res.status(404).send('Could not find chatroom');
        }else{
            chatroom.chatroom_queue.push(req.body.chatroom_queue);

            chatroom.save()
                .then(chatroom =>{
                    res.json('Song added')
                })
                .catch(err =>{
                    res.status(400).send('updated not complete');
                });
        }
    });
});

module.exports = router;