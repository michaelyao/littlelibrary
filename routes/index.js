var express = require('express');
var BookService = require('../services/Book');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/books', function(req, res) {
    console.log("Getting all books");
    BookService.getAllBooks(function(bookList){
        console.log(JSON.stringify(bookList));
        console.log(bookList.length);
        res.render('books', { title: 'Book List', "bookList": bookList });
    })

});

module.exports = router;
