var express = require('express'),
    router = express.Router();

router.get('/',function(req,res){
    console.log(req.session);
    res.render('user', { title: 'Samyste in Nancy ', subtitle: 'Have a look on the distance of your home and your samyste' , session:req.session });
});

module.exports = router;
