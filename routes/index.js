var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session);
  console.log('ok');
  res.render('index', { title: 'Express', session: req.session });
});

module.exports = router;
