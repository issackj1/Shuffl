const express = require ('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const axois = require('axios');

router.get('/login', (req, res) => res.render('login')); 


router.get('/register', (req, res) => res.render('register')); 

module.exports = router;


//Register Handle

router.post('/register', (req, res) =>
{
    const {name, email, password, password2} = req.body;
    let message = {};
    let count = 0;
    // check fields

    if (!name || !email || !password || !password2)
    {

        message['fill'] = 'Please fill in all fields';
        count++;
    }

    // check passwords match

    if (password !== password2)
    {
        message['match'] = 'Passwords do not match';
        count++;
    }

    // check password length

    if (password.length < 6)
    {
        message['passlength'] = 'Password should be at least 6 characters';
        count++;
    }


    if (count > 0)
    {
        res.json(message);
    }
    else{
        User.findOne({email:email})  //searching database
        .then(user => {
            if(user)
            {
                message['already'] = 'Email is already registered';
                //User exists
                res.json(message);
            }
            else{
                const newUser = new User({name, email, password});

                bcrypt.genSalt(10, (err, salt) => bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    {
                        //set apassword to hash
                        newUser.password = hash;
                        //save user
                        newUser.save()
                        .then(user => {
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


});

// Login
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: '/dashboard',
      failureRedirect: '/users/login',
      failureFlash: true
    })(req, res, next);
  });
  
  // Logout
  router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
  });


module.exports = router;