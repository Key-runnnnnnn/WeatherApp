const express=require('express'); // import express
const path=require('path'); // import path
const hbs=require('hbs'); // import hbs
const app=express(); // create express app
const port= process.env.PORT || 3000  ; // port to listen on


// public static path
const static_path=path.join(__dirname,'../public'); // get path to public folder
const template_path=path.join(__dirname,'../templates/views'); // get path to views folder
const partial_path=path.join(__dirname,'../templates/partials'); // get path to partials folder
app.set('view engine','hbs'); // set view engine
app.set('views',template_path); // set views path 
hbs.registerPartials(partial_path); // set partials path
app.use(express.static(static_path)); // use static files

//routing
app.get('/',(req,res)=>{ // create route
    res.render('index'); // send response
});

app.get('/about',(req,res)=>{ // create route
    res.render('about'); // send response
});

app.get('/weather',(req,res)=>{ // create route
    res.render('weather'); // send response
});

app.get('*',(req,res)=>{ // create route
    res.render('404page'); // send response
});

app.listen(port,()=>{ // listen on port 3000
    console.log('Server started on port 3000');
});