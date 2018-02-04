
var express = require('express');
var Book=require('../services/Book');

var router = express.Router();


router.post('/book', function(req, res, next) {
    console.log("add book router");
    console.log(JSON.stringify(req.body));
    var bookInfo = {};
    if( "title" in req.body_){
        bookInfo['Book_name'] = req.body["title"];
    }
    if("imageUrl" in req.body){
        bookInfo['image_url'] = req.body["imageUrl"];
    }
    if("ID" in req.body){
        bookInfo['Scanned_code'] = req.body["ID"];
    }

    if("codeType" in req.body){
        bookInfo['code_type'] = req.body["codeType"];
    }
    if("ASIN" in req.body){
        bookInfo['ASIN'] = req.body["ASIN"];
    }
    if("pageUrl" in req.body){
        bookInfo['book_url'] = req.body["pageUrl"];
    }


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
