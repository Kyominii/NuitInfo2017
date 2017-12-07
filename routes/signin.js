var hash = require('pbkdf2-password')();

var con = require('../accessBDD');
var express = require('express');
var router = express.Router();

router.post('/', function(req,res){
    req.checkBody('mail','Invalid E-mail').isEmail();
    req.checkBody('password','Invalid password').notEmpty();
    req.checkBody('firstname','Firstname empty').notEmpty();
    req.checkBody('lastname','Lastname empty').notEmpty();
    req.checkBody('pseudo','Pseudo empty').notEmpty();
    req.checkBody('address','Address empty').notEmpty();
    req.checkBody('postcode','Postcode empty').notEmpty();
    req.checkBody('city','City empty').notEmpty();
    req.checkBody('country','Country empty').notEmpty();
    req.checkBody('phone_number','Phone number empty').notEmpty();

    req.sanitizeBody('mail').escape();
    req.sanitizeBody('firstname').escape();
    req.sanitizeBody('lastname').escape();
    req.sanitizeBody('pseudo').escape();


    req.sanitizeBody('address').escape();
    req.sanitizeBody('postcode').escape();
    req.sanitizeBody('city').escape();
    req.sanitizeBody('country').escape();
    req.sanitizeBody('phone_number').escape();

    var errors = req.validationErrors();

    if(errors) {
        req.session.errors = errors;
        console.log(errors);
        res.redirect('/signin');
    }
    else {
        var sql = 'SELECT email FROM users WHERE email="'+req.body.email+'"';

        con.query(sql,function (err,result) {
            if(sql.length>0){
                console.log(req.session.errors);
                res.redirect('/signin');
            }
            else {
                var sqlAddress = 'INSERT INTO addresses VALUES(0,"' + req.body.address + '","' + req.body.postalcode + '","' + req.body.city + '","' + req.body.country + '")';

                con.query(sqlAddress, function (err, result) {

                    if (err) throw err;

                    var sql = 'SELECT lAST_INSERT_ID();';

                    var sqlUser = 'INSERT INTO users VALUES(0,"'+req.body.mail+'","' + req.body.password + '","'+req.body.firstname+'","'+req.body.lastname+'","'+req.body.pseudo+'","",'+result[0]['lAST_INSERT_ID()']+',"'+req.body.phone_number+'" ); ';
                    con.query(sqlUser, function (err, result) {
                        req.session.pseudo = req.body.pseudo;
                        con.query(sql, function (err,result) {
                          req.session.id = result[0]['lAST_INSERT_ID()'];
                          res.render('signin_success');
                        });
                    })
                  })
            }
        })

    }
});

router.get('/',function (req,res) {
    res.setHeader('Content-Type', 'text/html');
    res.render('signin');
});

module.exports = router;
