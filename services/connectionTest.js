var mysql      = require('mysql');

var connection = mysql.createConnection({  host     : '34.214.164.217',  user     : 'littlefreelib',  password : 'freelib$',  database : 'littlefreelib'});
connection.connect();
connection.query('SELECT * from fact_book_add', function(err, rows, fields) {  if (!err)    console.log('The solution is: ', rows);  else    console.log('Error while performing Query.',err);});
connection.end();
