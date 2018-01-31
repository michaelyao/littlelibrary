var db = require('./dbconnection');

var inMemDb = require('./inMemoryDB');

var Book = {

    getAllBooks:function(callback){
        console.log("Inside getAll books");
        if(db.state == "disconnected" ) {
            console.log("using in memory db");
            var results = inMemDb.find({});
            console.log("Get all books " + JSON.stringify(results));
            callback(results);
        }
        else{
            db.query("Select * from littlefreelib.fact_book_add limit 50", function (err, rows, fields) {
                console.log("connect to db ")
                if (!err) {
                    console.log("Result ", rows.length);
                    callback(rows);
                }
                else {
                    console.log("error in query");
                    callback(null);
                }
            })
        }

    },
    getBookById:function(id, callback){
        console.log("book id " + id);
        if(db.state == "disconnected" ) {
            var results = inMemDb.findOne({"ID" : id});
            results["source"] = "InMemDB"
            callback(results);
        }
        else{
            db.query("select * from littlefreelib.fact_book_add where Library_id =?",[id],callback);
        }

    },

    addBook:function(book, callback){
        try {
            console.log("book to add " + JSON.stringify(book));
            if (!db || db.state == "disconnected") {
                console.log("insert to in memory db");
                inMemDb.insert(book);
                var out = inMemDb.findOne({});
                console.log(JSON.stringify(out));
                callback(null, book);
            }
            else {
                console.log("db db state: " + db.state);
                db.query("Insert into book values(?,?,?)", [book.Id, Book.Title, book.Status], callback);
            }
        }
        catch(e){
            console.log(e);
        }

    },

    deleteBook:function(id, callback){
        console.log("delete a book " + id);
        if(db.state == "disconnected" ) {
        }
        else{
        }
        //return db.query("delete from book where Id=?",[id],callback);
        callback();
    },

    updateBook:function(id, book, callback){
        if(db.state == "disconnected" ) {
        }
        else{
        }
        console.log("update a book "+ id + "  " + JSON.stringify(book));
        //return db.query("update book set Title=?,Status=? where Id=?",[book.Title,book.Status,id],callback);
        callback();
    }

};
module.exports=Book;