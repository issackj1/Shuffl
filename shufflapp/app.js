const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const bodyParser = require('body-parser');
const PORT = 4000;
const app = express();
const router = express.Router();
const MongoStore = require('connect-mongo')(session);
let ChatRoom = require('./models/chatroom.model');
let User = require('./models/User');
const bcrypt = require('bcryptjs');
const helper = require('./serverhelper');

const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', function(socket) {
	//signuprequest
	socket.on('make room', function(state, userid) {
		helper.createRoom(state, userid);
	});

	socket.on('getchatrooms', function() {
		ChatRoom.find(function(err, chatrooms) {
			if (err) {
				console.log(err);
			} else {
				socket.emit('rechatrooms', chatrooms);
			}
		});
	});

	socket.on('getpopchatrooms', function() {
		ChatRoom.find(function(err, chatrooms) {
			if (err) {
				console.log(err);
			} else {
				const sortedChatrooms = chatrooms.sort((a, b) => {
					return b.UserList.length - a.UserList.length
				});
				socket.emit('repoprooms', sortedChatrooms);
			}
		});
	});

	async function getJoinedRooms() {
		socket.on('getjoinedrooms', async function(userid) {
			let chatRooms = await joinRooms(userid);
			// console.log(chatRooms);
			socket.emit('rejoinedrooms', chatRooms);
		});
	}

	getJoinedRooms();

	function joinRooms(userid) {
		return new Promise((resolve, reject) => {
			User.findOne({ _id: userid }).then(async (user) => {
				let promises = [];
				user.RoomList.forEach(function(room) {
					promises.push(
						new Promise((resolve, reject) => {
							ChatRoom.findOne({ _id: room }).then((chatroom) => {
								resolve(chatroom);
							});
						})
					);
				});
				let chatRooms = await Promise.all(promises);
				resolve(chatRooms);
			});
		});
	}

	socket.on('updatechat', function(msg, roomid) {
		if (helper.updateChat(msg, roomid)) {
			ChatRoom.find({ _id: roomid }, function(err, chatroom) {
				io.to(roomid).emit('updatechat', chatroom.ChatLog);
			});
		} else {
		}
	});

	socket.on('joinroom', function(roomid, username, userid) {
		socket.join(roomid);
		ChatRoom.findById({ _id: roomid }, function(err, chatroom) {
			if (err) {
				console.log(err);
			} else {
				if (!chatroom.UserList.includes(username)) {
					chatroom.UserList.push(username);
					chatroom.save();
				}
			}
		});
		User.findById({ _id: userid }, function(err, user) {
			if (err) {
				console.log(err);
			} else {
				if (!user.RoomList.includes(roomid)) {
					user.RoomList.push(roomid);
					user.save();
				}
			}
		});
		io.to(roomid).emit('receivemessage', username + ' has joined the room');
	});

	socket.on('reqtime', function(roomid, username) {
		io.to(roomid).emit('timereq', username);
	});

	socket.on('reqqueue', function(roomid, username) {
		io.to(roomid).emit('queuereq', username);
	});

	socket.on('sendtime', function(roomid, username, time, state, videoid) {
		io.to(roomid).emit('receivetime', username, time, state, videoid);
	});

	socket.on('sendqueue', function(roomid, username, queue) {
		io.to(roomid).emit('receivequeue', username, queue);
	});

	socket.on('updateQueue', function(roomid, queue) {
		io.to(roomid).emit('updateQueue', queue);
	});

	socket.on('updateVideo', function(roomid, videoid) {
		io.to(roomid).emit('updateVideo', videoid);
	});

	socket.on('sendplay', function(roomid) {
		io.to(roomid).emit('receiveplay');
	});

	socket.on('sendpause', function(roomid) {
		io.to(roomid).emit('receivepause');
	});

	socket.on('sendskip', function(roomid) {
		io.to(roomid).emit('receiveskip');
	});

	socket.on('sendstop', function(roomid) {
		io.to(roomid).emit('receivestop');
	});

	socket.on('sendmessage', function(msg, roomid) {
		io.to(roomid).emit('receivemessage', msg);
	});

	socket.on('leaveroom', function(roomid, username) {
		socket.leave(roomid);
		io.to(roomid).emit('receivemessage', username + ' has left the room');
	});
});

http.listen(4001, function() {
	console.log('listening on *:4001');
});

//DB Config
// Express passport middleware
app.use(passport.initialize());
app.use(passport.session());

const db = require('./config/keys').MongoURI; // MongoURI is the key passed from our atlas connection. URI being held in keys.js

mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log('MongoDB Connected...'))
	.catch((err) => console.log(err));

const connection = mongoose.connection;

//passport config
require('./config/passport')(passport);

app.use(cookieParser());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

//Body parser
app.use(express.urlencoded({ extended: false }));
// Express Session middleware
app.use(
	session({
		secret: 'secret',
		resave: false,
		saveUninitialized: false,
		store: new MongoStore({
			mongooseConnection: connection
		}),
		cookie: { httpOnly: true, maxAge: 15 * 1000 } // configure when sessions expires
	})
);

//check for session
app.get('/', function(req, res) {
	if (req.session.passport) {
		req.session.passport['session'] = 'active';
		req.session.save();
		res.send({
			res: req.session.passport
		});
	}
});

app.use('/users', require('./routes/users'));
app.use('/chatrooms', require('./routes/chatrooms'));

// global variables
app.use((req, res, next) => {
	res.locals.session = req.session;
	next();
});

module.exports = app;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
