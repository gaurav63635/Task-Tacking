// hand on practice on prev 1 to 6 lect:
// in backend devlopment we can create a json file during devlopment 
// because it can contain  all detail about project

// Basic boiler plate code of express:
const express=require('express');
const app=express();

const path=require('path');
const fs=require('fs');

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));

app.get('/',function(req,res)
{   fs.readdir(`./File`,function(err,File){
    res.render("index",{File:File});
})

})
app.get('/File/:filename',function(req,res){
    fs.readFile(`./File/${req.params.filename}`,"utf-8",function(err,filedata){
        res.render('show',{filename: req.params.filename,filedata:filedata});
    
    })
})
    

app.post('/create',function(req,res){
        
    fs.writeFile(`./File/${req.body.title.split(' ').join('')}.txt`,req.body.details,function(err){
        res.redirect("/"); 
    });
})



app.listen(3000);

