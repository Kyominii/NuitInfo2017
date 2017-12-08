var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  	res.render('tram');
})

.get('/horaires_essey', function(req,res) {
	res.render('horaires/essey');
})

.get('/horaires_chu', function(req,res) {
	res.render('horaires/chu');
})

.get('/horaires_faisanderie', function(req,res) {
	res.render('horaires/faisanderie');
})

.get('/horaires_foretDeHaye', function(req,res) {
	res.render('horaires/foret_de_haye');
})

.get('/horaires_esseyRoosevelt', function(req,res) {
	res.render('horaires/essey_roosevelt');
})

.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Erreur 404 : t\'es où mais t\'es pas là');
});;

module.exports = router;
