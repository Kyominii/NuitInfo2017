var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  	res.render('astuces',{title: 'Astuces', session: req.session});
})
.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Erreur 404 : t\'es où mais t\'es pas là');
});

module.exports = router;
