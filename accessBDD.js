var mysql = require('mysql');

var con = mysql.createConnection({
    host: "91.121.159.38",
    user: "ndli",
    password: "ndlitncyjs",
    database: "ndli"
    });

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con;