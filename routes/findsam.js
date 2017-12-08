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
        var sql = 'SELECT * FROM carsProp';

        con.query(sql, function (err,result) {
            if(err) throw err;
            console.log(req.session.pseudo);
            res.render('findsam',{title: 'Trouver sam', session: req.session , props:result});
        })
    }
    else{
        res.redirect('/login');
    }
});

module.exports = router;

