var con = require('../accessBDD');
var express = require('express');
var router = express.Router();

router.post('/',function(req,res){
    if(req.session.pseudo) {

    }
    else{
        res.redirect('/login');
    }
});

router.get('/', function(req,res){
    if(req.session.pseudo) {
        res.setHeader('Content-Type', 'text/html');
        var sql = 'SELECT * FROM carsProp';

        con.query(sql, function (err,result) {
            if(err) throw err;
            res.render('findSam',{session:req.session, props:result});
        })
    }
    else{
        res.redirect('/login');
    }
});