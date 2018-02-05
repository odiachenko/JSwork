var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database : 'hw1_news'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //Insert a record in the "customers" table:
});

var sql = "INSERT INTO news (Title, Text) VALUES ('My article', 'Its text of this article')";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");
});

var sql = "SELECT * FROM news";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log(result);
});
