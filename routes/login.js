var hash = require('pbkdf2-password')();

var con = require('../accessBDD');
var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    req.checkBody('pseudo','Invalid pseudo').notEmpty();
    req.checkBody('password','Invalid password').notEmpty();
    req.sanitizeBody('pseudo').escape();
    var errors = req.validationErrors();
    res.setHeader('Content-Type', 'text/html');
    if (errors) {
        res.render('login', {session: req.session});
    }
    else {
        var sql = 'SELECT id,password FROM users WHERE pseudo="'+req.body.pseudo+'" ';

        con.query(sql, function (err,result) {
            if(err) throw err;
            console.log(result);
            if(result.length>0) {
                if (result[0]['password'] === req.body.password) {
                    req.session.pseudo = req.body.pseudo;
                    req.session.userid = result[0]['id'];

                    res.redirect('/');
                }
                else{
                    res.redirect('/login');
                }
            }
            else{
                res.redirect('/login');
            }
        })


    }
});

router.get('/',function (req,res) {
    res.setHeader('Content-Type', 'text/html');
    res.render('login', {session: req.session});
});

module.exports = router;
