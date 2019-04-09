const express = require ('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const cors = require('cors');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const PORT = 4000;
const app = express();
const router = express.Router();
app.use(cors());


app.use(bodyParser.json());
// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/chatrooms', require('./routes/chatrooms'));


//passport config
require('./config/passport')(passport);

//DB Config

const db = require('./config/keys').MongoURI; // MongoURI is the key passed from our atlas connection. URI being held in keys.js

mongoose.connect(db, {useNewUrlParser: true})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

const connection = mongoose.connection;

let ChatRoom = require('./models/chatroom.model');


 //Body parser
app.use(express.urlencoded({extended: false})); 


// Express Session middleware
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
  }));

// global variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.session = req.session;
    next();
});


app.listen(PORT, console.log(`Server started on port ${PORT}`));