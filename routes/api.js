
var express = require('express');
var Book=require('../services/Book');

var router = express.Router();


router.post('/book', function(req, res, next) {
    console.log("add book router");
    console.log(JSON.stringify(req.body));
    Book.addBook(req.body,function(err,count){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(req.body);//or return count for 1 &amp;amp;amp; 0
        }

    });
});


router.get('/book/:id?',function(req,res,next){

    if(req.params.id){

        Book.getBookById(req.params.id,function(err,rows){

            if(err)
            {
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    else{

        Book.getAllBooks(function(err,rows){

            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }

        });
    }

});

router.delete('book/:id',function(req,res,next){

    Book.deleteBook(req.params.id,function(err,count){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(count);
        }

    });
    next();
});
router.put('book/:id',function(req,res,next){

    Book.updateBook(req.params.id,req.body,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
    next();
});

module.exports = router;
