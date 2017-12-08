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
var signin = require('./routes/signin');
var login = require('./routes/login');
var neighbor = require('./routes/neighbor');
var findcar = require('./routes/findcar');
var findSam = require('./routes/findSam');
var error404 = require('./routes/error404');

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
app.use('/signin', signin);
app.use('/logout', logout);
app.use('/neighbor',neighbor);
app.use('/findcar', findcar);
app.use('/findSam', findSam);
app.use('*', error404);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
