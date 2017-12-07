var hash = require('pbkdf2-password')();

var con = require('../accessBDD');
var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    req.checkBody('mail','Invalid E-mail').isEmail();
    req.checkBody('password','Invalid password').notEmpty();
    req.sanitizeBody('mail').escape();
    var errors = req.validationErrors();
    res.setHeader('Content-Type', 'text/html');
    if (errors) {
        res.render('login',{});
    }
    else {
        req.session.user = req.body.mail;
        res.redirect('/');
    }
    console.log("test");
});

router.get('/',function (req,res) {
    res.setHeader('Content-Type', 'text/html');
    res.render('login');
});

module.exports = router;