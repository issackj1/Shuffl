const express = require('express');
const app = require('../app');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const axois = require('axios');
const User = require('../models/User');

router.get('/login', (req, res) => res.render('login'));

router.get('/register', (req, res) => res.render('register'));

// Express passport middleware
router.use(passport.initialize());
router.use(passport.session());


//Register Handle

router.post('/register', (req, res) => {
    const {name, email, password, password2} = req.body;
    let message = {};
    let count = 0;
    // check fields

    if (!name || !email || !password || !password2) {

        message['fill'] = 'Please fill in all fields';
        count++;
    }


    // check if email contains an @ symbol
    if (!email.match('@'))
    {
        message['atsymbol'] = 'Invalid email address';
        count++;
    }


    // check passwords match

    if (password !== password2) {
        message['match'] = 'Passwords do not match';
        count++;
    }

    // check password length

    if (password.length < 6) {
        message['passlength'] = 'Password should be at least 6 characters';
        count++;
    }


    if (count > 0) 
    {
        res.json(message);
    } 
    
    
    else if (count === 0)
    {
        User.findOne({email: email})  //searching database
            .then(user => 
            {
                if (user) 
                {
                    message['already'] = 'Email is already registered';
                    //User exists
                    res.json(message);
                } 
                
                else 
                {
                    const newUser = new User({name, email, password});

                    bcrypt.genSalt(10, (err, salt) => bcrypt.hash(newUser.password, salt, (err, hash) =>
                    {
                        if (err) throw err;
                        {
                            //set apassword to hash
                            newUser.password = hash;
                            //save user
                            newUser.save()
                                .then(user => 
                                {
                                    //req.flash('success_msg' , 'You are now registered and can login');
                                    message['success'] = 'success';
                                    res.json(message);
                                })
                                .catch(err => console.log(err));
                        }
                    }))
                }

            });
    }
    else
    {
        User.findOne({name:name})
            .then(username =>
            {
                if(username)
                {
                    message['useralready'] = "Username already exists";
                    res.json(message);
                }
            })
    }

});

// Login
router.post('/login',
    passport.authenticate('local'),
    function (req, res) {
    //console.log(req.session);
    req.session.passport['name'] = req.user.name;
    req.session.passport['email'] = req.user.email;
    req.session.save();
    //res.send(req.session);
        res.json({
           'msg': 'success'
        });
    });

// Logout
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/users/login');
});


module.exports = router;