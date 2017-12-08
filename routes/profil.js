var con = require('../accessBDD');
var express = require('express');
var router = express.Router();

router.post('/',function(req,res, next){
    if(req.session.pseudo) {

    }
    else{
        res.redirect('/login');
    }
});

router.get('/', function(req, res, next) {
    if(req.session.pseudo) {
        res.setHeader('Content-Type', 'text/html');
        var sql = 'SELECT * FROM users WHERE id='+req.session.userid;

        con.query(sql, function (err,result) {
            if(err) throw err;
            var sql = 'SELECT * FROM addresses WHERE id='+result[0]['address_id'];
            console.log(sql);
            con.query(sql, function(err,result2){
                console.log(result2);

                res.render('profil',{title: 'Profile', session: req.session , pseudo:req.session.pseudo, name:(result[0]["firstname"]+" "+result[0]["lastname"]), pointSam:result[0]['points'],address:(result2[0]["address"]+" "+result2[0]["city"]+" "+result2[0]["country"]),phone:result[0]["phone_number"]});
            })
        })
    }
    else{
        res.redirect('/login');
    }
});

module.exports = router;