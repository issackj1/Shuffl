const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser')
const passport = require('passport');
const bodyParser = require('body-parser');
const PORT = 4000;
const app = express();
const router = express.Router();
const MongoStore = require('connect-mongo')(session);


const http = require("http").Server(app);
const io = require('socket.io')(http);


io.on('connection', function(socket){
    console.log('an user connected');

    socket.on('authreq',function(){
        //do auth with db here
        //if auth approved  
        socket.emit('authapprove')
        //else if auth denied
        //socket.emit('authdeny')
    })
    socket.on('make room', function(){
        console.log('create room received');
    });

    socket.on('authenticate',function(){

    });
    //var username
    //var current room

    // socket.on(authenticate, function(username, password){
    //     
    // })

    // socket.on(authenticate, function(username, password){
    //     
    // })

    //socket.on(joined, function(roomid){

    //})


});

http.listen(4001, function(){
console.log('listening on *:4001');
});

//DB Config
// Express passport middleware
app.use(passport.initialize());
app.use(passport.session());


const db = require('./config/keys').MongoURI; // MongoURI is the key passed from our atlas connection. URI being held in keys.js

mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

const connection = mongoose.connection;

//passport config
require('./config/passport')(passport);

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(bodyParser.json());

//Body parser
app.use(express.urlencoded({extended: false}));

// configure when sessions expires

// Express Session middleware
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: connection
    }),
    cookie : { httpOnly: true, maxAge: 1 * 1000} // configure when sessions expires
}));

// Routes
app.get('/', function (req, res) {
    if(req.session.passport){
        res.send({
            'msg': 'welcome back'
        })
    }else{
        res.send({
            'msg': 'welcome'
        })
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