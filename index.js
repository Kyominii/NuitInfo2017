var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('<h1>another hello world</h1>');
});

app.listen(4546);
