var session = require('express-session');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var bodyParser = require('body-parser');
var exec = require('child_process').exec;

var index = require('./routes/index');
var users = require('./routes/users');
var logout = require('./routes/logout');
var signup = require('./routes/signup');
var login = require('./routes/login');
var tram = require('./routes/tram');
var neighbor = require('./routes/neighbor');
var add_prop = require('./routes/add_prop');
var findsam = require('./routes/findsam');
var profil = require('./routes/profil');
var error404 = require('./routes/error404');
var avis = require('./routes/avis');
var astuces = require('./routes/astuces');

var app = express();

app.post('/deploy', function(req, res) {
    var child = exec("cd ~/www ; git pull", function(err, stdout, stderr){
        if(err !== null){
            res.send('<h1>Error during deployment !</h1><p>' + stderr + '</p>');
        }else{
            res.send('<h1>Deployment completed !</h1><p>' + stdout + '</p>');
        }
    });
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator()); // Add this after the bodyParser middlewares!
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: 'shhhh, very secret'
}));

app.use('/', index);
app.use('/users', users);
app.use('/login', login);
app.use('/signup', signup);
app.use('/logout', logout);
app.use('/tram', tram);
app.use('/neighbor',neighbor);
app.use('/findsam', findsam);
app.use('/add_prop', add_prop);
app.use('/profil', profil);
app.use('/avis', avis);
app.use('/astuces', astuces);
app.use('*', error404);


module.exports = app;
