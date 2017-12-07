var hash = require('pbkdf2-password')();

var con = require('../accessBDD');
var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    req.checkBody('pseudo','Invalid pseudo').notEmpty();
    req.checkBody('password','Invalid password').notEmpty();
    req.sanitizeBody('mail').escape();
    var errors = req.validationErrors();
    res.setHeader('Content-Type', 'text/html');
    if (errors) {
        res.render('login',{});
    }
    else {
        req.session.user.pseudo = req.body.pseudo;
        req.session.user.id = 0;

        res.redirect('/');
    }
});

router.get('/',function (req,res) {
    res.setHeader('Content-Type', 'text/html');
    res.render('login');
});

module.exports = router;
