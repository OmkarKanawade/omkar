var express=require('express');
var app=express();
var path=require('path');
var fs=require('fs');
app.get('/',function(req,resp){
    resp.sendfile(path.join(__dirname+'/index.html'));
});
app.listen(3000);