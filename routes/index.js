var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session);
  console.log('ok');
  res.render('index', { title: 'Sam sauve ta vie', session: req.session });
});

module.exports = router;
