var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  	res.render('tram', {session: req.session});
});

router.get('/horaires_essey', function(req,res) {
	res.render('horaires/essey', {session: req.session});
})

.get('/horaires_chu', function(req,res) {
	res.render('horaires/chu', {session: req.session});
})

.get('/horaires_faisanderie', function(req,res) {
	res.render('horaires/faisanderie', {session: req.session});
})

.get('/horaires_foretDeHaye', function(req,res) {
	res.render('horaires/foret_de_haye', {session: req.session});
})

.get('/horaires_esseyRoosevelt', function(req,res) {
	res.render('horaires/essey_roosevelt', {session: req.session});
})

.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Erreur 404 : t\'es où mais t\'es pas là');
});;

module.exports = router;
