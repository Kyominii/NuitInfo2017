var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  	res.render('avis',{title: 'Avis', session: req.session});
})
.post('/',function(req,res, next){
    if(req.session.pseudo) {
      var name = req.name;
      var message = req.message;
      var note = req.note;

      var sql = 'SELECT * FROM users WHERE pseudo="'+name+'"';
      if (sql.length = 0) {
        res.redirect('/avis');
      }
      else {
        
      }

      res.render('/',{title: 'home', session: req.session})
    }
    else{
        res.redirect('/login');
    }
})
.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Erreur 404 : t\'es où mais t\'es pas là');
});

module.exports = router;
