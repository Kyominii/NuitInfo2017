var con = require('../accessBDD');
var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    if(req.session.pseudo) {
        req.checkBody('location', 'Location empty').notEmpty();
        req.checkBody('date', 'Invalid date').notEmpty();
        req.checkBody('t1', 'Invalid time1').notEmpty();
        req.checkBody('t2', 'Invalid time2').notEmpty();
        req.checkBody('car', 'Invalid car').notEmpty();
        req.sanitizeBody('location').escape();
        req.sanitizeBody('date').escape();
        req.sanitizeBody('t1').escape();
        req.sanitizeBody('t2').escape();
        req.sanitizeBody('car').escape();
        var errors = req.validationErrors();
        if (errors) {
            res.redirect('findcar');
        }
        else{
            var sql = 'INSERT INTO carsProp VALUES(0,'+req.body.car+',"'+req.body.location+'","'+req.body.date+'","'+req.body.t1+'","'+req.body.t2+'")';

            con.query(sql, function(err, result){
                if(err) throw err;
                var sql2 = 'UPDATE cars\n' +
                    'SET available=1\n' +
                    'WHERE id='+req.body.car;

                con.query(sql2,function (err,result) {
                    if(err) throw err;
                    var sql3 = 'SELECT * FROM cars WHERE user_id=' + req.session.userid +' AND available=0';
                    con.query(sql3, function (err, result) {
                        res.render('findcar', { cars:result, carAdd:true, title:'Devenir Sam'});
                    })
                })
            })
        }
    }
    else
    {
        res.redirect('/login');
    }
});

router.get('/',function (req,res) {
    if(req.session.pseudo) {
        res.setHeader('Content-Type', 'text/html');
        var sql = 'SELECT * FROM cars WHERE user_id=' + req.session.userid +' AND available=0';
        con.query(sql, function (err, result) {
            res.render('findcar', { cars:result, carAdd:false, title:'Devenir Sam'});
        })
    }
    else
    {
        res.redirect('/login');
    }
});

module.exports = router;
