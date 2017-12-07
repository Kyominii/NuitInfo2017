var express = require('express');
var router = express.Router();

router.post('/deploy', function(req, res)  {
    var child = exec("cd ~/www ; git pull ; npm install", function(err, stdout, stderr){
        if(err !== null){
            res.send('<h1>Error during deployment !</h1><p>' + stderr + '</p>');
        }else{
            res.send('<h1>Deployment completed !</h1><p>' + stdout + '</p>');
        }
    });
});

module.exports = router;
