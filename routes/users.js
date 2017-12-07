var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.session.user) {
    res.send('Welcome back : ' + req.session.user);
  } else {
    res.send('Not connected !')
  }
});

router.get('/car/add', function(req, res, next) {

});

module.exports = router;
