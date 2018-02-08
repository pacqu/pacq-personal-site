var express = require('express');
var app = express();
var path = __dirname + '/views/';

app.use(express.static(__dirname + '/static'));

app.get('/', function(req,res){
    console.log("Visiting at Index");
    res.sendFile(path + 'index.html');
});

app.get('/bio', function(req,res){
    console.log("Visiting at Bio");
    res.sendFile(path + 'bio.html');
});

app.get('/resume', function(req,res){
    console.log("Visiting at resume");
    res.sendFile(path + 'resume.html');
});

app.get('/coding', function(req,res){
    console.log("Visiting at coding");
    res.sendFile(path + 'coding.html');
});

app.get('/writing', function(req,res){
    console.log("Visiting at writing");
    res.sendFile(path + 'writing.html');
});


app.listen(3000, function(){
  console.log("Live at Port 3000");
});
