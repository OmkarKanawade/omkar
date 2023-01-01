var express=require('express');
var app=express();
var path=require('path');
var fs=require('fs');
var staticFolder=express.static(path.join(__dirname,"public"));
app.use(staticFolder);

app.get('/',function(req,resp){
    resp.sendfile(path.join(__dirname+'/index.html'));
});
app.listen(3000);