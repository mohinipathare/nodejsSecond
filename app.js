//const http=require('http');
const express=require('express');
const body_parser=require('body-parser');
const app=express();
app.use(body_parser.urlencoded({'extended':false}));
app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"></input><button type="submit">add product</button></form>');
});
app.use('/product',(req,res,next)=>
{
    console.log(req.body);
    res.redirect('/');
});
app.use('/',(req,res,next)=>
{
    res.send('<h1>hello from express!!!</h1>');
});
app.listen(3000);
