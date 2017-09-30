var express = require('express');
var app = express();
var path = __dirname + '/views/';

app.use(express.static(__dirname + '/static'));

app.get('/', function(req,res){
    console.log("ay");
    res.sendFile(path + 'index.html');
});


app.listen(3000, function(){
  console.log("Live at Port 3000");
});
