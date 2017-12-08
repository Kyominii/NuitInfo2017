var express = require('express');
var router = express.Router();
var mysql = require('../accessBDD');

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.session.pseudo) {
    var query = "SELECT * FROM cars WHERE user_id=" + req.session.userid;
    mysql.query(query, (err, result) => {
      if(err) {
        throw err;
      }
      else {
        res.render('users', {displayMode: 0, pseudo: req.session.pseudo, data: result});
      }
    });
  } else {
    res.send('Not connected !')
  }
});

router.post('/car/add', function(req, res, next) {
  if (req.session.pseudo) {
    var query = 'INSERT INTO cars (user_id,capacity,brand,available) VALUES('+req.session.userid+',"'+req.body.capacity+'","'+req.body.brand+'", 0)';
    mysql.query(query, function (err, result) {
      if (err) throw err;
      res.render('users', {displayMode: 1});
    });
  } else {
    res.redirect('/login');
  }
});

module.exports = router;
