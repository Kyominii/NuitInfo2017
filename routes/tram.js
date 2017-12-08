var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  	res.render('tram',{title: 'Tram', session: req.session});
})

.get('/horaires_essey', function(req,res) {
	res.render('horaires/essey',{title: 'horaires essey', session: req.session});
})

.get('/horaires_chu', function(req,res) {
	res.render('horaires/chu',{title: 'horaires chu', session: req.session});
})

.get('/horaires_faisanderie', function(req,res) {
	res.render('horaires/faisanderie',{title: 'horaires faisanderie', session: req.session});
})

.get('/horaires_foretDeHaye', function(req,res) {
	res.render('horaires/foret_de_haye',{title: 'horaires forêt de Haye', session: req.session});
})

.get('/horaires_esseyRoosevelt', function(req,res) {
	res.render('horaires/essey_roosevelt',{title: 'horaires essey roosevelt', session: req.session});

})

.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Erreur 404 : t\'es où mais t\'es pas là');
});

module.exports = router;
