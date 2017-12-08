var express = require('express');
var router = express.Router();

var now = new Date();
var mois    = now.getMonth() + 1;
var jour    = now.getDate();
var heure   = now.getHours();
var minute  = now.getMinutes();
var affiche_horaire = "Jour : " + jour + "/" + mois + ", Heure actuelle : " + heure + "h" + minute + "min"

router.get('/', function(req, res) {
    res.render('tram', { title: 'Horaires de tram', affiche_horaire : affiche_horaire});
})
.use(function(req, res, next){

    res.setHeader('Content-Type', 'text/plain');

    res.status(404).send('Erreur 404 : t\'es où mais t\'es pas là');

});;

module.exports = router;
