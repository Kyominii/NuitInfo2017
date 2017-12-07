var express = require('express');
var router = express.Router();
var mysql = require('../accessBDD');

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.session.user) {
    res.render('users', {displayMode: 0, pseudo: req.session.user});
  } else {
    res.send('Not connected !')
  }
});

router.get('/car', function(req, res, next) {
  if (req.session.user) {
    var query = 'INSERT INTO cars VALUES('+req.session.user.id+',"'+req.body.capacity+'","'+req.body.brand+'", 0)';
    mysql.query(query, function (err, result) {
      if (err) throw err;
      res.render('users', {displayMode: 1});
    });
  } else {
    res.send('Not connected !')
  }
});

module.exports = router;
