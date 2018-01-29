var loki = require("lokijs");

var db = new loki('loki.json');

var books = db.addCollection('books');

module.exports=books;