var mysql=require('mysql');

var connection=mysql.createConnection({

    host:'littliefreelib.ciwkgczngjcb.us-west-2.rds.amazonaws.com',
    //port: 3306,
    user:'littlefreelib',
    password:'freelib$',
    database:'littlefreelib'

});
connection.connect( function(err) {

    if (err) {
        console.log("Connection error " + err )
        console.log("db connection status " + connection.state );
    }
    else {

/*        connection.query("Select * from fact_book_add limit 5", function (err, rows, fields) {
            console.log("connect to db ")
            if (!err) {
                console.log("Result ", rows);
            }
            else {
                console.log("error in query");
            }
        })*/
        console.log("connected to db successfully");
    }
});


module.exports=connection;
