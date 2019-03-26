const express = require ('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session'); 
const app = express();
const passport = require('passport');



//passport config
require('./config/passport')(passport);

//DB Config

const db = require('./config/keys').MongoURI; // MongoURI is the key passed from our atlas connection. URI being held in keys.js

mongoose.connect(db, {useNewUrlParser: true})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));


//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

 //Body parser
app.use(express.urlencoded({extended: false})); 


// Express Session middleware
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  }));

// Express passport middleware
app.use(passport.initialize());
app.use(passport.session());


//connect flash middleware
app.use(flash());


// global variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});


// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));