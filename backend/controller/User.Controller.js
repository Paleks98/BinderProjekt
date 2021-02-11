var express = require('express');
var router = express.Router();
var User = require('../model/User');


// Home page route.
router.post('/create', function (req, res) {
    new User(111111111, req.body.firstName, req.body.lastName, req.body.DOB, req.body.email, req.body.password, req.body.interests).create();
    res.send('User has been created!');
})

router.post('/login', function (req, res) {
    var loggedIn = User.login(req.body.email, req.body.password);
    if(loggedIn){
        res.send(loggedIn);
    } else {
        res.send('Invalid login details');
    }
});

module.exports = router;