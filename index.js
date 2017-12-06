var express = require('express');
var exec = require('child_process').exec;

var app = express();

app.get('/', (req, res) => {
  res.send('<h1>SacDeNoeud.js</h1>');
});

app.get('/deploy', (req, res) => {
  var child = exec("cd ~/www ; git pull", function(err, stdout, stderr){
        if(err != null){
            res.send('<h1>Error during deployment !</h1><p>' + stderr + '</p>');
        }else{
            res.send('<h1>Deployment completed !</h1><p>' + stdout + '</p>');
        }
    });
});

app.listen(4546);
