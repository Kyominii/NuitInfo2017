var express = require('express')
var router = express.Router();

router.get('/',function(req,res){
    console.log(req.session);
    if(req.session.pseudo) {
        res.render('neighbor', {
            session: req.session,
            title: 'Samyste in Nancy ',
            subtitle: 'Have a look on the distance of your home and your samyste'
        });
    }
    else {
        res.redirect('/login');
    }
});

module.exports = router;
